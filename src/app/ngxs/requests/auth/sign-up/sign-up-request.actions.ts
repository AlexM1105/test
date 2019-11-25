import { AuthInterface } from '../../../../core/models/auth.interface';

export class SignUpRequestAction {
  static type = '[Requests] Sign Up';

  constructor(public payload: AuthInterface) {
  }
}

export class SignUpRequestSuccessAction {
  static type = '[Requests] Sign Up Success';

  constructor(public payload: any) {
  }
}

export class SignUpRequestFailAction {
  static type = '[Requests] Sign Up Fail';

  constructor(public payload: any) {
  }
}

