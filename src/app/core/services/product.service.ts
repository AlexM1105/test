import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { LoadProductsAction } from '../../ngxs/product/product.actions';
import { ProductGetterState } from '../../ngxs/product/product-getter.state';
import { ProductModel } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Select(ProductGetterState.getProducts)
  products$: Observable<ProductModel[]>;

  constructor(
    private store: Store,
    private httpClient: HttpClient,
  ) {
  }

  getProducts() {
    this.store.dispatch(new LoadProductsAction());
    return this.products$;
  }

  getProductsRequest() {
    return this.httpClient.get('products/');
  }
}
