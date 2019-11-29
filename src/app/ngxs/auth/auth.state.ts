import { Action, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import {
  LogoutAction,
  SignInAction,
  SignInFailAction,
  SignInSuccessAction,
  SignUpAction,
  SignUpFailAction,
  SignUpSuccessAction,
} from './auth.actions';
import { SignUpRequestAction } from '../requests/auth/sign-up/sign-up-request.actions';
import { SignInRequestAction } from '../requests/auth/sign-in/sign-in-request.actions';
import { SessionService } from '../../core/services/session.service';
import { SnackService } from '../../core/services/snack.service';

export interface AuthStateModel {
  isSignInFormCorrect: boolean;
  success: boolean;
  token: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isSignInFormCorrect: true,
    success: null,
    token: null,
  },
})
export class AuthState {

  constructor(
    private sessionService: SessionService,
    private snackService: SnackService,
  ) {
  }

  @Action(SignUpAction)
  signUp(ctx: StateContext<AuthStateModel>, action: SignUpAction) {
    ctx.dispatch(new SignUpRequestAction(action.payload));
  }

  @Action(SignUpSuccessAction)
  signUpSuccess(ctx: StateContext<AuthStateModel>, action: SignUpSuccessAction) {
    ctx.patchState({
      success: action.payload.success,
    });

    // additional check because of wrong request status on login fail
    if (action.payload.success) {
      this.sessionService.setToken(action.payload.token);
      this.snackService.showSnack('Registration success', 4000, 'success');
      ctx.dispatch(new Navigate(['/']));
    } else {
      this.snackService.showSnack(action.payload.message);
    }
  }

  @Action(SignUpFailAction)
  signUpFail(ctx: StateContext<AuthStateModel>, action: SignUpFailAction) {
    console.error(action.payload);
  }

  @Action(SignInAction)
  signIn(ctx: StateContext<AuthStateModel>, action: SignInAction) {
    ctx.dispatch(new SignInRequestAction(action.payload));
  }

  @Action(SignInSuccessAction)
  signInSuccess(ctx: StateContext<AuthStateModel>, action: SignInSuccessAction) {
    ctx.patchState({
      isSignInFormCorrect: action.payload.success,
      success: action.payload.success,
    });

    // additional check because of wrong request status on login fail
    if (action.payload.success) {
      this.sessionService.setToken(action.payload.token);
      ctx.dispatch(new Navigate(['/']));
    } else {
      this.snackService.showSnack(action.payload.message);
    }
  }

  @Action(SignInFailAction)
  signInFail(ctx: StateContext<AuthStateModel>, action: SignInFailAction) {
    ctx.patchState({
      isSignInFormCorrect: false,
    });
  }

  @Action(LogoutAction)
  logout(ctx: StateContext<AuthStateModel>) {
    this.sessionService.removeToken();
    ctx.patchState({
      success: false,
    });
  }
}
