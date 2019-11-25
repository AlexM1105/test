import { AuthInterface } from '../../../../core/models/auth.interface';

export class SignInRequestAction {
  static type = '[Requests] Sign In';

  constructor(public payload: AuthInterface) {
  }
}

export class SignInRequestSuccessAction {
  static type = '[Requests] Sign In Success';

  constructor(public payload: any) {
  }
}

export class SignInRequestFailAction {
  static type = '[Requests] Sign In Fail';

  constructor(public payload: any) {
  }
}

