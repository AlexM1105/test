import { NgModule } from '@angular/core';

import { ProductReviewsRoutingModule } from './product-reviews-routing.module';
import { ProductReviewsComponent } from './product-reviews.component';
import { AppSharedModule } from '../../../shared/shared.module';
import { SelectProductGuard } from '../../../core/guards/select-product.guard';
import { ClearSelectedProductGuard } from '../../../core/guards/clear-selected-product.guard';


@NgModule({
  declarations: [
    ProductReviewsComponent,
  ],
  imports: [
    AppSharedModule,
    ProductReviewsRoutingModule,
  ],
  providers: [
    SelectProductGuard,
    ClearSelectedProductGuard
  ],
})
export class ProductReviewsModule { }
