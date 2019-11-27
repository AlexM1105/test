import { Action, State, StateContext } from '@ngxs/store';

import {
  CreateReviewAction,
  CreateReviewSuccessAction,
  LoadReviewsAction,
  LoadReviewsSuccessAction,
} from './review.actions';
import { ReviewModel } from '../../core/models/review.model';
import { ReviewsGetRequestAction } from '../requests/review/reviews-get/reviews-get-request.actions';
import { ReviewPostRequestAction } from '../requests/review/review-post/review-post-request.actions';
import { ProductModel } from '../../core/models/product.model';

export interface ReviewStateModel {
  entities: { [key: string]: ReviewModel };
  ids: string[];
}

@State<ReviewStateModel>({
  name: 'review',
  defaults: {
    entities: {},
    ids: [],
  },
})
export class ReviewState {

  @Action(LoadReviewsAction)
  loadReviews(ctx: StateContext<ReviewStateModel>, action: LoadReviewsAction) {
    ctx.dispatch(new ReviewsGetRequestAction(action.payload));
  }

  @Action(LoadReviewsSuccessAction)
  loadReviewsSuccess(ctx: StateContext<ReviewStateModel>, action: LoadReviewsSuccessAction) {
    const entities = action.payload.reduce((acc: { [id: string]: any }, entity: ProductModel) => {
      return {...acc, [entity.id]: new ReviewModel(entity)};
    }, {});
    ctx.patchState({
      entities,
      ids: Object.keys(entities),
    });
  }

  @Action(CreateReviewAction)
  createReview(ctx: StateContext<ReviewStateModel>, action: CreateReviewAction) {
    ctx.dispatch(new ReviewPostRequestAction(action.payload));
  }

  @Action(CreateReviewSuccessAction)
  createReviewSuccess(ctx: StateContext<ReviewStateModel>, action: CreateReviewSuccessAction) {
    ctx.patchState({
      entities: {
        ...ctx.getState().entities,
        ...action.payload,
      },
      ids: [
        ...ctx.getState().ids,
        ...action.payload.id,
      ],
    });
  }

}
