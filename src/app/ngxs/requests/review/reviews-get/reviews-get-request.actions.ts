export class ReviewsGetRequestAction {
  static type = '[Requests] Reviews Get';

  constructor(public payload?: any) {
  }
}

export class ReviewsGetRequestSuccessAction {
  static type = '[Requests] Reviews Get Success';

  constructor(public payload: any) {
  }
}

export class ReviewsGetRequestFailAction {
  static type = '[Requests] Reviews Get Fail';

  constructor(public payload: any) {
  }
}
