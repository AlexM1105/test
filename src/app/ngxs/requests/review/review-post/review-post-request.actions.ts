export class ReviewPostRequestAction {
  static type = '[Requests] Review Post';

  constructor(public payload?: any) {
  }
}

export class ReviewPostRequestSuccessAction {
  static type = '[Requests] Review Post Success';

  constructor(public payload: any) {
  }
}

export class ReviewPostRequestFailAction {
  static type = '[Requests] Review Post Fail';

  constructor(public payload: any) {
  }
}
