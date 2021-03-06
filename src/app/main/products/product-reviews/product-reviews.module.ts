import { NgModule } from '@angular/core';

import { ProductReviewsRoutingModule } from './product-reviews-routing.module';
import { ProductReviewsComponent } from './product-reviews.component';
import { AppSharedModule } from '../../../shared/shared.module';
import { SelectProductGuard } from '../../../core/guards/select-product.guard';
import { ClearSelectedProductGuard } from '../../../core/guards/clear-selected-product.guard';
import { ReviewCreateModule } from '../review-create/review-create.module';


@NgModule({
  declarations: [
    ProductReviewsComponent,
  ],
  imports: [
    AppSharedModule,
    ProductReviewsRoutingModule,
    ReviewCreateModule,
  ],
  providers: [
    SelectProductGuard,
    ClearSelectedProductGuard
  ],
})
export class ProductReviewsModule { }
