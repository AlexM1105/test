import { NgModule } from '@angular/core';

import { ProductReviewsRoutingModule } from './product-reviews-routing.module';
import { ProductReviewsComponent } from './product-reviews.component';
import { AppSharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ProductReviewsComponent,
  ],
  imports: [
    AppSharedModule,
    ProductReviewsRoutingModule,
  ]
})
export class ProductReviewsModule { }
