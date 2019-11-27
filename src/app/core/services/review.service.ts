import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';

import { ReviewGetterState } from '../../ngxs/review';
import { ReviewModel } from '../models/review.model';
import { CreateReviewAction, LoadReviewsAction } from '../../ngxs/review/review.actions';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  @Select(ReviewGetterState.getReviews)
  reviews$: Observable<ReviewModel[]>;

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

  createReview(data) {
    this.store.dispatch(new CreateReviewAction(data));
  }

  createReviewRequest(data) {
    const id = 1;
    return this.httpClient.get(`reviews/${id}`, data);
  }
}
