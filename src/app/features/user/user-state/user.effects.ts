import { Router } from '@angular/router';
import { Account } from '../../../core/classes/account';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserActionTypes, LoadUser, LoadUserSuccess, LoadUserFailed, UpdateUser }  from './user.actions';
import { AccountService } from '../../../core/services/account.service';



@Injectable()
export class UserEffects {


  readonly loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType<LoadUser>(UserActionTypes.loadUserAction),
      mergeMap(action =>
        this.accountService.getAccountById(action.accountId).pipe(
          map(value => new LoadUserSuccess(Account.Build(value))),
          catchError(() => of(new LoadUserFailed()))
        )
      )
    ),
  )

  readonly updateUser$ = createEffect(
    () => this.actions$.pipe(
      ofType<UpdateUser>(UserActionTypes.updateUserAction),
      mergeMap(action => (
        this.accountService.updateAccount(action.account).pipe(
          map(value => (
            new LoadUserSuccess(Account.Build(value))),
            this.router.navigate(['profile'])
          ),
          catchError(() => of(new LoadUserFailed()))
        ))
      )
    )
  )

  constructor(private actions$: Actions, private accountService: AccountService, private router: Router) {}

}
