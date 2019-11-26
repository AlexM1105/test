import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AppSharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    AppSharedModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
