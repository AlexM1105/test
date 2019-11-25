import { Selector } from '@ngxs/store';

import { ProductState, ProductStateModel } from './product.state';
import { ProductModel } from '../../core/models/product.model';

export class ProductGetterState {
  @Selector([ProductState])
  static getSelectedProduct(state: ProductStateModel): ProductModel {
    return state.entities[state.selectedProductId];
  }

  @Selector([ProductState])
  static getProducts(state: ProductStateModel): ProductModel[] {
    return state.ids.map(id => state.entities[id]);
  }
}
