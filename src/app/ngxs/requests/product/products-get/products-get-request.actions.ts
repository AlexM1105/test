export class ProductsGetRequestAction {
  static type = '[Requests] Products Get';

  constructor(public payload?: any) {
  }
}

export class ProductsGetRequestSuccessAction {
  static type = '[Requests] Products Get Success';

  constructor(public payload: any) {
  }
}

export class ProductsGetRequestFailAction {
  static type = '[Requests] Products Get Fail';

  constructor(public payload: any) {
  }
}
