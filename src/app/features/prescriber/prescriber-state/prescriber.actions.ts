import { Action } from '@ngrx/store';
import { Prescriber } from '../../../core/classes/prescriber';

export enum PrescriberActionTypes {
  loadPrescribersAction = 'SETPRESCRIBERLISTLOADING',
  successfulPrescribersLoadingAction = 'SETPRESCRIBERLISTSUCCESS',
  failurePrescriberLoading = 'SETPRESCRIBERLOADINGFAILED',
  updatePrescriberAction = 'UPDATEPRESCRIBER',
  updatePrescriberSuccessAction = 'UPDATEPRESCRIBERSUCCESS',
  failurePrescriberUpdating = 'SETPRESCRIBERUPDATINGFAILED',
}


export class LoadPrescriber implements Action{
  readonly type = PrescriberActionTypes.loadPrescribersAction
}


export class LoadPrescriberSuccess implements Action{
  readonly type = PrescriberActionTypes.successfulPrescribersLoadingAction

  constructor(public readonly prescriberList: Prescriber[]){}
}

export class LoadPrescriberFailed implements Action{
  readonly type = PrescriberActionTypes.failurePrescriberLoading
}

export class UpdatePrescriber implements Action {
  readonly type = PrescriberActionTypes.updatePrescriberAction

  constructor(public readonly prescriber: Prescriber) {}
}

export class UpdatePrescriberSuccess implements Action {
  readonly type = PrescriberActionTypes.updatePrescriberSuccessAction

  constructor(public readonly prescriber: Prescriber) {}
}

export class UpdatePrescriberFailed implements Action{
  readonly type = PrescriberActionTypes.failurePrescriberLoading
}


export type PrescriberActions = LoadPrescriber | LoadPrescriberSuccess | LoadPrescriberFailed | UpdatePrescriber | UpdatePrescriberSuccess | UpdatePrescriberFailed
