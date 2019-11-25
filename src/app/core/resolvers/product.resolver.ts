import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { filter, take } from 'rxjs/operators';

import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<any> {
  constructor(
    private productService: ProductService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productService.getProducts().pipe(
      filter(res => !!res),
      take(1),
    );
  }
}
