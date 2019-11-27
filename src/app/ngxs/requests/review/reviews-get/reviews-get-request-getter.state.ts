import { Selector } from '@ngxs/store';

import { ReviewsGetRequestStateModel, ReviewsGetRequestState } from './reviews-get-request.state';

export class ReviewsGetRequestGetterState {

  @Selector([ReviewsGetRequestState])
  static getReviewsGetRequestState(state: ReviewsGetRequestStateModel): ReviewsGetRequestStateModel {
    return state;
  }

}
