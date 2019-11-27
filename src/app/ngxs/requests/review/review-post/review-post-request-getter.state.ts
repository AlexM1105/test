import { Selector } from '@ngxs/store';

import { ReviewPostRequestStateModel, ReviewPostRequestState } from './review-post-request.state';

export class ReviewPostRequestGetterState {

  @Selector([ReviewPostRequestState])
  static getReviewPostRequestState(state: ReviewPostRequestStateModel): ReviewPostRequestStateModel {
    return state;
  }

}
