import { Selector, State } from '@ngxs/store';

import { IRequestsNestedState } from './requests.interface';
import { SignInRequestState } from './auth/sign-in/sign-in-request.state';
import { SignUpRequestState } from './auth/sign-up/sign-up-request.state';
import { ProductsGetRequestState } from './product/products-get/products-get-request.state';
import { ReviewsGetRequestState } from './review/reviews-get/reviews-get-request.state';
import { ReviewPostRequestState } from './review/review-post/review-post-request.state';


export interface RequestsStateModel {
}

@State<RequestsStateModel>({
  name: 'requests',
  defaults: {},
  children: [
    SignInRequestState,
    SignUpRequestState,
    ProductsGetRequestState,
    ReviewsGetRequestState,
    ReviewPostRequestState,
  ],
})
export class RequestsState {
  @Selector([
    SignUpRequestState,
    SignInRequestState,
    ProductsGetRequestState,
    ReviewsGetRequestState,
    ReviewPostRequestState,
  ])
  static loadingStatus(requestsState: {[key: string]: IRequestsNestedState}): boolean {
    const states = Object.values(requestsState);
    return states
      .filter((state) => {
        // filter requests state and states that are not loading
        return state && state.hasOwnProperty('loading') && state.loading;
      })
      .length > 0;
  }
}
