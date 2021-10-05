import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  Login = '[Login] Action',
  Logout = '[Logout] Action',
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public token: string) {}
}


export class LogoutAction implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions = | LoginAction | LogoutAction;
