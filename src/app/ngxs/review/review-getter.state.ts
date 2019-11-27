import { Selector } from '@ngxs/store';

import { ReviewState, ReviewStateModel } from './review.state';

import { ReviewModel } from '../../core/models/review.model';

export class ReviewGetterState {
  @Selector([ReviewState])
  static getReviews(state: ReviewStateModel): ReviewModel[] {
    return state.ids.map(id => state.entities[id]);
  }
}
