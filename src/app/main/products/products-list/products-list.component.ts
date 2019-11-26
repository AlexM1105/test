import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductService } from '../../../core/services/product.service';
import { ProductModel } from '../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {

  products$: Observable<ProductModel[]> = this.productService.products$;

  constructor(
    private productService: ProductService,
  ) {
  }

}
