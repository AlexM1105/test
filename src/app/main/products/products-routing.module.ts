import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductResolver } from '../../core/resolvers/product.resolver';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./products-list/products-list.module').then(m => m.ProductsListModule),
      },
      {
        path: 'reviews/:id',
        loadChildren: () => import('./product-reviews/product-reviews.module').then(m => m.ProductReviewsModule),
      },
    ],
    resolve: [
      ProductResolver,
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
