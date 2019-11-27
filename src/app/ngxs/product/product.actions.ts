export const ActionTypes = {
  SELECT_PRODUCT: `[Product] Select Product`,
  CLEAR_SELECTED_PRODUCT: `[Product] Clear Selected Product`,

  LOAD_PRODUCTS: '[Product] Load Products',
  LOAD_PRODUCTS_SUCCESS: '[Product] Load Products Success',
  LOAD_PRODUCTS_FAIL: '[Product] Load Products Fail',
};

export class SelectProductAction {
  static type = ActionTypes.SELECT_PRODUCT;

  constructor(public payload?: string) {
  }
}

export class ClearSelectedProductAction {
  static type = ActionTypes.CLEAR_SELECTED_PRODUCT;

  constructor() {
  }
}

export class LoadProductsAction {
  static type = ActionTypes.LOAD_PRODUCTS;

  constructor(public payload?: string) {
  }
}
export class LoadProductsSuccessAction {
  static type = ActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: any) {
  }
}
export class LoadProductsFailAction {
  static type = ActionTypes.LOAD_PRODUCTS_FAIL;

  constructor(public payload: any) {
  }
}
