import { Action, State, StateContext } from '@ngxs/store';

import { catchError, switchMap } from 'rxjs/operators';

import {
  ProductsGetRequestAction,
  ProductsGetRequestFailAction,
  ProductsGetRequestSuccessAction,
} from './products-get-request.actions';
import { IRequestsNestedState } from '../../requests.interface';
import { requestFailState, requestInitialState, requestLoadingState, requestSuccessState } from '../../../utils';
import { ProductService } from '../../../../core/services/product.service';
import { LoadProductsFailAction, LoadProductsSuccessAction } from '../../../product/product.actions';

export interface ProductsGetRequestStateModel extends IRequestsNestedState {
}

@State<ProductsGetRequestStateModel>({
  name: 'productsGetRequestState',
  defaults: requestInitialState,
})
export class ProductsGetRequestState {

  constructor(
    private productService: ProductService,
  ) {
  }

  @Action(ProductsGetRequestAction)
  productsGetRequest(
    ctx: StateContext<ProductsGetRequestStateModel>,
    action: ProductsGetRequestAction,
  ) {
    ctx.patchState(requestLoadingState);
    return this.productService.getProductsRequest().pipe(
      switchMap((res: any) => {
        return ctx.dispatch(new ProductsGetRequestSuccessAction(res));
      }),
      catchError(error => {
        return ctx.dispatch(new ProductsGetRequestFailAction(error));
      }),
    );
  }

  @Action(ProductsGetRequestSuccessAction)
  productsGetRequestSuccess(
    ctx: StateContext<ProductsGetRequestStateModel>,
    action: ProductsGetRequestSuccessAction,
  ) {
    ctx.patchState(requestSuccessState(action.payload));
    ctx.dispatch(new LoadProductsSuccessAction(action.payload));
  }

  @Action(ProductsGetRequestFailAction)
  productsGetRequestFail(
    ctx: StateContext<ProductsGetRequestStateModel>,
    action: ProductsGetRequestFailAction,
  ) {
    ctx.patchState(requestFailState(action.payload));
    ctx.dispatch(new LoadProductsFailAction(action.payload));
  }

}
