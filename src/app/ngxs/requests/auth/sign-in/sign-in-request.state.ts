import { Action, State, StateContext } from '@ngxs/store';
import { catchError, switchMap } from 'rxjs/operators';

import { IRequestsNestedState } from '../../requests.interface';
import {
  requestFailState,
  requestInitialState,
  requestLoadingState,
  requestSuccessState
} from '../../../utils';
import { SignInFailAction, SignInSuccessAction } from '../../../auth/auth.actions';
import {
  SignInRequestAction,
  SignInRequestFailAction,
  SignInRequestSuccessAction,
} from './sign-in-request.actions';
import { AuthService } from '../../../../core/services/auth.service';

@State<IRequestsNestedState>({
  name: 'signInRequestState',
  defaults: requestInitialState,
})
export class SignInRequestState {

  constructor(
    private authService: AuthService,
  ) {
  }

  @Action(SignInRequestAction)
  signInRequest(ctx: StateContext<IRequestsNestedState>, action: SignInRequestAction) {
    ctx.patchState(requestLoadingState);
    return this.authService.signInRequest(action.payload).pipe(
      switchMap((res: any) => {
        return ctx.dispatch(new SignInRequestSuccessAction(res));
      }),
      catchError(error => {
        return ctx.dispatch(new SignInRequestFailAction(error));
      }),
    );
  }

  @Action(SignInRequestSuccessAction)
  signInRequestSuccess(ctx: StateContext<IRequestsNestedState>, action: SignInRequestSuccessAction) {
    ctx.patchState(requestSuccessState(action.payload));
    ctx.dispatch(new SignInSuccessAction(action.payload));
  }

  @Action(SignInRequestFailAction)
  signInRequestFail(ctx: StateContext<IRequestsNestedState>, action: SignInRequestFailAction) {
    ctx.patchState(requestFailState(action.payload));
    ctx.dispatch(new SignInFailAction(action.payload.errors));
  }

}
