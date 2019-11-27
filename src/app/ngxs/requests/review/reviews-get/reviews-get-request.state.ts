import { Action, State, StateContext } from '@ngxs/store';
import { catchError, switchMap } from 'rxjs/operators';

import {
  ReviewsGetRequestAction,
  ReviewsGetRequestFailAction,
  ReviewsGetRequestSuccessAction,
} from './reviews-get-request.actions';
import { IRequestsNestedState } from '../../requests.interface';
import { ReviewService } from '../../../../core/services/review.service';
import { requestFailState, requestInitialState, requestLoadingState, requestSuccessState } from '../../../utils';
import { LoadReviewsFailAction, LoadReviewsSuccessAction } from '../../../review/review.actions';

export interface ReviewsGetRequestStateModel extends IRequestsNestedState {
}

@State<ReviewsGetRequestStateModel>({
  name: 'reviewsGetRequestState',
  defaults: requestInitialState,
})
export class ReviewsGetRequestState {

  constructor(
    private reviewService: ReviewService,
  ) {
  }

  @Action(ReviewsGetRequestAction)
  reviewsGetRequest(
    ctx: StateContext<ReviewsGetRequestStateModel>,
    action: ReviewsGetRequestAction,
  ) {
    ctx.patchState(requestLoadingState);
    return this.reviewService.getReviewsRequest(action.payload).pipe(
      switchMap((res: any) => {
        return ctx.dispatch(new ReviewsGetRequestSuccessAction(res));
      }),
      catchError(error => {
        return ctx.dispatch(new ReviewsGetRequestFailAction(error));
      }),
    );
  }

  @Action(ReviewsGetRequestSuccessAction)
  reviewsGetRequestSuccess(
    ctx: StateContext<ReviewsGetRequestStateModel>,
    action: ReviewsGetRequestSuccessAction,
  ) {
    ctx.patchState(requestSuccessState(action.payload));
    ctx.dispatch(new LoadReviewsSuccessAction(action.payload));
  }

  @Action(ReviewsGetRequestFailAction)
  reviewsGetRequestFail(
    ctx: StateContext<ReviewsGetRequestStateModel>,
    action: ReviewsGetRequestFailAction,
  ) {
    ctx.patchState(requestFailState(action.payload));
    ctx.dispatch(new LoadReviewsFailAction(action.payload));
  }

}
