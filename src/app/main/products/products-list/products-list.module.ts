import { NgModule } from '@angular/core';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { AppSharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ProductsListComponent,
  ],
  imports: [
    AppSharedModule,
    ProductsListRoutingModule,
  ]
})
export class ProductsListModule { }
