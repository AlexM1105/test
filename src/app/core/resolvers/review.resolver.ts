import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { filter, take } from 'rxjs/operators';

import { ReviewService } from '../services/review.service';


@Injectable({
  providedIn: 'root',
})
export class ReviewResolver implements Resolve<any> {
  constructor(
    private reviewService: ReviewService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.reviewService.getReviews(route.paramMap.get('id')).pipe(
      filter(res => !!res),
      take(1),
    );
  }
}
