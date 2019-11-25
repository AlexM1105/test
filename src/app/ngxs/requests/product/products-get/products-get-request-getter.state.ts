import { Selector } from '@ngxs/store';

import { ProductsGetRequestStateModel, ProductsGetRequestState } from './products-get-request.state';

export class ProductsGetRequestGetterState {

  @Selector([ProductsGetRequestState])
  static getProductsGetRequestState(state: ProductsGetRequestStateModel): ProductsGetRequestStateModel {
    return state;
  }

}
