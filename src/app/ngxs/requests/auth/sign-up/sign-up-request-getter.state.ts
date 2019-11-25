import { Selector } from '@ngxs/store';

import { IRequestsNestedState } from '../../requests.interface';
import { SignUpRequestState } from './sign-up-request.state';

export class SignUpRequestGetterState {

  @Selector([SignUpRequestState])
  static getSignUpRequestGetterStateLoading(state: IRequestsNestedState) {
    return state.loading;
  }

}
