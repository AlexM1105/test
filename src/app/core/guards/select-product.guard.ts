import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

import { ProductService } from '../services/product.service';


@Injectable()
export class SelectProductGuard implements CanActivate {

  constructor(
    private productService: ProductService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.productService.selectProduct(route.paramMap.get('id'));
    return true;
  }

}

