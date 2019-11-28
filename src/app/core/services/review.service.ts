import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ReviewGetterState } from '../../ngxs/review';
import { ReviewModel } from '../models/review.model';
import { CreateReviewAction, LoadReviewsAction } from '../../ngxs/review/review.actions';
import { IRequestsNestedState } from '../../ngxs/requests/requests.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  @Select(ReviewGetterState.getReviews)
  reviews$: Observable<ReviewModel[]>;

  reviewPostRequestState$: Observable<IRequestsNestedState>;

  constructor(
    private store: Store,
    private httpClient: HttpClient,
  ) {

    this.reviewPostRequestState$ = this.store.select(
      (state) => state.requests.reviewPostRequestState,
    );
  }

  getReviews(id: string) {
    this.store.dispatch(new LoadReviewsAction(id));
    return this.reviews$;
  }

  getReviewsRequest(id: string) {
    return this.httpClient.get(`reviews/${id}`);
  }

  createReview(data: {id: string, text: string, rate: number}) {
    this.store.dispatch(new CreateReviewAction(data));
  }

  createReviewRequest({id, ...data}) {
    return this.httpClient.post(`reviews/${id}`, data);
  }
}
