import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { ClearSelectedProductAction, LoadProductsAction, SelectProductAction } from '../../ngxs/product/product.actions';
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

  selectProduct(id: string) {
    this.store.dispatch(new SelectProductAction(id));
  }

  clearSelectedProduct() {
    this.store.dispatch(new ClearSelectedProductAction());
  }
}
