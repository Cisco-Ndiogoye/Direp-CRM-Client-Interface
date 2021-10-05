import { Account } from '../../../core/classes/account';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  loadUserAction = 'SETUSERLOADING',
  successfulUserLoadingAction = 'SETUSERSUCCESS',
  failureUserLoading = 'SETUSERFAILED',
  updateUserAction = 'UPDATEUSER'
}


export class LoadUser implements Action{
  readonly type = UserActionTypes.loadUserAction

  constructor(public readonly accountId: number){}
}


export class LoadUserSuccess implements Action{
  readonly type = UserActionTypes.successfulUserLoadingAction

  constructor(public readonly account: Account){}
}

export class LoadUserFailed implements Action{
  readonly type = UserActionTypes.failureUserLoading
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.updateUserAction

  constructor(public readonly account: Account) {}
}

export type UserActions = LoadUser | LoadUserSuccess | LoadUserFailed | UpdateUser
