import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductReviewsComponent } from './product-reviews.component';
import { ReviewResolver } from '../../../core/resolvers/review.resolver';


const routes: Routes = [
  {
    path: '',
    component: ProductReviewsComponent,
    resolve: [
      ReviewResolver,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductReviewsRoutingModule { }
