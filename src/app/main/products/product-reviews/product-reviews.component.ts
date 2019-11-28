import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ReviewService } from '../../../core/services/review.service';
import { ReviewModel } from '../../../core/models/review.model';
import { ProductService } from '../../../core/services/product.service';
import { ProductModel } from '../../../core/models/product.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductReviewsComponent {

  reviews$: Observable<ReviewModel[]> = this.reviewService.reviews$;

  selectedProduct$: Observable<ProductModel> = this.productService.selectedProduct$;

  isGuest$: Observable<boolean> = this.authService.isGuest$;

  constructor(
    private reviewService: ReviewService,
    private productService: ProductService,
    private authService: AuthService,
  ) {
  }
}
