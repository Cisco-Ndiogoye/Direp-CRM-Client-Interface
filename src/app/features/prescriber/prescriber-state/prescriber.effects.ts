import { Prescriber } from './../../../core/classes/prescriber';
import { LoadPrescriber, PrescriberActionTypes, LoadPrescriberSuccess, LoadPrescriberFailed, UpdatePrescriber, UpdatePrescriberSuccess, UpdatePrescriberFailed } from './prescriber.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { PrescriberService } from '../../../core/services/prescriber.service';



@Injectable()
export class PrescriberEffects {


  readonly loadPrescribers$ = createEffect(
    () => this.actions$.pipe(
      ofType<LoadPrescriber>(PrescriberActionTypes.loadPrescribersAction),
      mergeMap(() =>
        this.prescriberService.getPrescribersList().pipe(
          map(value => (
            new LoadPrescriberSuccess(value as Prescriber[])
            )
          ),
          catchError(() => of(new LoadPrescriberFailed()))
        )
      )
    ),
  )

  readonly updatePrescriber$ = createEffect(
    () => this.actions$.pipe(
      ofType<UpdatePrescriber>(PrescriberActionTypes.updatePrescriberAction),
      mergeMap(action => (
        this.prescriberService.updatePrescriber(action.prescriber).pipe(
          map(value => (
            new UpdatePrescriberSuccess(Prescriber.Build(value))
          ),
          catchError(() => of(new UpdatePrescriberFailed()))
        ))
      ))
    )
  )


  constructor(private actions$: Actions, private prescriberService: PrescriberService) {}

}
