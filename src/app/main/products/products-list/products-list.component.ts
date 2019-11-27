import { Router } from '@angular/router';
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
    private router: Router,
  ) {
  }

  selectProduct(id: string) {
    this.router.navigate(['products', 'reviews', id]);
  }
}
