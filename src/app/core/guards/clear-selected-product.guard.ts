import { CanDeactivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { ProductService } from '../services/product.service';

export interface CanComponentDeactivate {
  canDeactivate: boolean;
}

@Injectable()
export class ClearSelectedProductGuard implements CanDeactivate<CanComponentDeactivate> {

  constructor(
    private router: Router,
    private productService: ProductService,
  ) {
  }

  canDeactivate(
    component: CanComponentDeactivate,
  ): boolean {
    this.productService.clearSelectedProduct();
    return true;
  }

}
