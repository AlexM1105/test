import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductReviewsComponent } from './product-reviews.component';
import { ReviewResolver } from '../../../core/resolvers/review.resolver';
import { SelectProductGuard } from '../../../core/guards/select-product.guard';
import { ClearSelectedProductGuard } from '../../../core/guards/clear-selected-product.guard';


const routes: Routes = [
  {
    path: '',
    component: ProductReviewsComponent,
    canActivate: [
      SelectProductGuard,
    ],
    resolve: [
      ReviewResolver,
    ],
    canDeactivate: [
      ClearSelectedProductGuard,
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductReviewsRoutingModule { }
