import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ReviewGetterState } from '../../ngxs/review';
import { ReviewModel } from '../models/review.model';
import { CreateReviewAction, LoadReviewsAction } from '../../ngxs/review/review.actions';
import { ReviewPostRequestGetterState } from '../../ngxs/requests/review/review-post/review-post-request-getter.state';
import { IRequestsNestedState } from '../../ngxs/requests/requests.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  @Select(ReviewGetterState.getReviews)
  reviews$: Observable<ReviewModel[]>;

  @Select(ReviewPostRequestGetterState.getReviewPostRequestState)
  reviewPostRequestState$: Observable<IRequestsNestedState>;

  constructor(
    private store: Store,
    private httpClient: HttpClient,
  ) {
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
