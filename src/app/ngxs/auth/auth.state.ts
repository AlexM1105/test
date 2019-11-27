import { Action, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import {
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
    this.sessionService.setToken(action.payload.token);
    ctx.dispatch(new Navigate(['/']));
  }

  @Action(SignUpFailAction)
  signUpFail(ctx: StateContext<AuthStateModel>, action: SignUpFailAction) {
    console.error(action.payload);
  }

  @Action(SignInAction)
  signInForm(ctx: StateContext<AuthStateModel>, action: SignInAction) {
    ctx.dispatch(new SignInRequestAction(action.payload));
  }

  @Action(SignInSuccessAction)
  signInSuccess(ctx: StateContext<AuthStateModel>, action: SignInSuccessAction) {
    ctx.patchState({
      isSignInFormCorrect: action.payload.success,
      success: action.payload.success,
    });
    this.sessionService.setToken(action.payload.token);
    ctx.dispatch(new Navigate(['/']));
  }

  @Action(SignInFailAction)
  signInFail(ctx: StateContext<AuthStateModel>, action: SignInFailAction) {
    ctx.patchState({
      isSignInFormCorrect: false,
    });
  }
}
