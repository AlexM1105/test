import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { Subject, Subscription } from 'rxjs';
import { filter, withLatestFrom } from 'rxjs/operators';

import { ReviewService } from '../../../core/services/review.service';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss']
})
export class ReviewCreateComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  reviewForm: FormGroup;

  sendReview$: Subject<boolean> = new Subject<boolean>();

  get textControl(): AbstractControl {
    return this.reviewForm.get('text');
  }

  get rateControl(): AbstractControl {
    return this.reviewForm.get('rate');
  }

  constructor(
    private reviewService: ReviewService,
    private productService: ProductService,
  ) {
  }

  ngOnInit() {

    this.reviewForm = new FormGroup({
      rate: new FormControl(3, [Validators.required]),
      text: new FormControl('', [Validators.required]),
    });

    this.subscriptions.push(

      this.sendReview$.pipe(
        withLatestFrom(this.productService.selectedProduct$),
        filter(() => this.reviewForm.valid),
      ).subscribe(([emit, selectedProduct]) => {
        this.reviewService.createReview({
          ...this.reviewForm.value,
          id: selectedProduct.id
        });
      }),

      this.reviewService.reviewPostRequestState$.pipe(
        filter(state => state.status === 'success'),
      ).subscribe(() => this.reviewForm.reset())

    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(res => res.unsubscribe());
  }

  onRate(event) {
    this.rateControl.setValue(event.newValue);
  }

  onSubmit() {
    this.sendReview$.next(true);
  }
}
