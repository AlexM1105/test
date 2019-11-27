import { Action, State, StateContext } from '@ngxs/store';
import { catchError, switchMap } from 'rxjs/operators';

import {
  ReviewPostRequestAction,
  ReviewPostRequestFailAction,
  ReviewPostRequestSuccessAction,
} from './review-post-request.actions';
import { IRequestsNestedState } from '../../requests.interface';
import { requestFailState, requestInitialState, requestLoadingState, requestSuccessState } from '../../../utils';
import { ReviewService } from '../../../../core/services/review.service';
import { CreateReviewFailAction, CreateReviewSuccessAction } from '../../../review/review.actions';

export interface ReviewPostRequestStateModel extends IRequestsNestedState {
}

@State<ReviewPostRequestStateModel>({
  name: 'reviewPostRequestState',
  defaults: requestInitialState,

})
export class ReviewPostRequestState {

  constructor(
    private reviewService: ReviewService,
  ) {
  }

  @Action(ReviewPostRequestAction)
  reviewPostRequest(
    ctx: StateContext<ReviewPostRequestStateModel>,
    action: ReviewPostRequestAction,
  ) {
    ctx.patchState(requestLoadingState);

    return this.reviewService.createReviewRequest(action.payload).pipe(
      switchMap((res: any) => {
        return ctx.dispatch(new ReviewPostRequestSuccessAction(res));
      }),
      catchError(error => {
        return ctx.dispatch(new ReviewPostRequestFailAction(error));
      }),
    );
  }

  @Action(ReviewPostRequestSuccessAction)
  reviewPostRequestSuccess(
    ctx: StateContext<ReviewPostRequestStateModel>,
    action: ReviewPostRequestSuccessAction,
  ) {
    ctx.patchState(requestSuccessState(action.payload));
    ctx.dispatch(new CreateReviewSuccessAction(action.payload));
  }

  @Action(ReviewPostRequestFailAction)
  reviewPostRequestFail(
    ctx: StateContext<ReviewPostRequestStateModel>,
    action: ReviewPostRequestFailAction,
  ) {
    ctx.patchState(requestFailState(action.payload));
    ctx.dispatch(new CreateReviewFailAction(action.payload));
  }

}
