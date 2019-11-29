import { AuthInterface } from '../../core/models/auth.interface';

const ActionTypes = {
  SIGN_UP: '[Auth] Sign Up',
  SIGN_UP_SUCCESS: '[Auth] Sign Up Success',
  SIGN_UP_FAIL: '[Auth] Sign Up Fail',

  SIGN_IN: '[Auth] Sign In',
  SIGN_IN_SUCCESS: '[Auth] Sign In Success',
  SIGN_IN_FAIL: '[Auth] Sign In Fail',

  LOGOUT: '[Auth] Log out',
};

export class SignUpAction {
  static type = ActionTypes.SIGN_UP;

  constructor(public payload: AuthInterface) {
  }
}
export class SignUpSuccessAction {
  static type = ActionTypes.SIGN_UP_SUCCESS;

  constructor(public payload: any) {
  }
}
export class SignUpFailAction {
  static type = ActionTypes.SIGN_UP_FAIL;

  constructor(public payload: any) {
  }
}


export class SignInAction {
  static type = ActionTypes.SIGN_IN;

  constructor(public payload: AuthInterface) {
  }
}
export class SignInSuccessAction {
  static type = ActionTypes.SIGN_IN_SUCCESS;

  constructor(public payload: any) {
  }
}
export class SignInFailAction {
  static type = ActionTypes.SIGN_IN_FAIL;

  constructor(public payload: any) {
  }
}

export class LogoutAction {
  static type = ActionTypes.LOGOUT;
}



