import { Selector } from '@ngxs/store';

import { IRequestsNestedState } from '../../requests.interface';
import { SignInRequestState } from './sign-in-request.state';

export class SignInRequestGetterState {

  @Selector([SignInRequestState])
  static getSignInRequestStateLoading(state: IRequestsNestedState) {
    return state.loading;
  }

}
