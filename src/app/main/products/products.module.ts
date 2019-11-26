import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AppSharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    AppSharedModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
