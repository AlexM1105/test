import { Action, State, StateContext } from '@ngxs/store';

import { ProductModel } from '../../core/models/product.model';
import { ClearSelectedProductAction, LoadProductsAction, LoadProductsSuccessAction, SelectProductAction } from './product.actions';
import { ProductsGetRequestAction } from '../requests/product/products-get/products-get-request.actions';

export interface ProductStateModel {
  entities: {[key: string]: ProductModel};
  ids: string[];
  selectedProductId: string;
}

@State<ProductStateModel>({
  name: 'product',
  defaults: {
    entities: {},
    ids: [],
    selectedProductId: null,
  },
})
export class ProductState {

  @Action(LoadProductsAction)
  loadProducts(ctx: StateContext<ProductStateModel>, action: LoadProductsAction) {
    ctx.dispatch(new ProductsGetRequestAction(action.payload));
  }

  @Action(LoadProductsSuccessAction)
  loadProductsSuccess(
    ctx: StateContext<ProductStateModel>,
    action: LoadProductsSuccessAction,
  ) {
    const entities = action.payload.reduce((acc: {[id: string]: any}, entity: ProductModel) => {
      return {...acc, [entity.id]: new ProductModel(entity)};
    }, {});
    ctx.patchState({
      entities,
      ids: Object.keys(entities),
    });
  }

  @Action(SelectProductAction)
  selectProduct(ctx: StateContext<ProductStateModel>, action: SelectProductAction) {
    ctx.patchState({
      selectedProductId: action.payload,
    });
  }

  @Action(ClearSelectedProductAction)
  clearSelectedProduct(ctx: StateContext<ProductStateModel>, action: ClearSelectedProductAction) {
    ctx.patchState({
      selectedProductId: null,
    });
  }
}
