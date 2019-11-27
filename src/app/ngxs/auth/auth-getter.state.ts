import { Selector } from '@ngxs/store';

import { AuthState, AuthStateModel } from './auth.state';

export class AuthGetterState {

  @Selector([AuthState])
  static getIsSignInFormCorrect(state: AuthStateModel): boolean {
    return state.isSignInFormCorrect;
  }

  @Selector([AuthState])
  static isGuest(state: AuthStateModel) {
    return !state.success;
  }
}
