import { User } from './../../user/user/user';
import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
  Login = "Login"
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;

  constructor(public token: string) {

  }
}


export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = Login | Logout;
