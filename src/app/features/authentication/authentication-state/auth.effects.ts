import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { LoginAction, AuthActionTypes, LogoutAction } from './auth.actions';

@Injectable()
export class AuthEffects {

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<LoginAction>(AuthActionTypes.Login),
        tap(action => {
          localStorage.setItem('token', action.token)
          this.router.navigate(['profile'])
        })
      ),
    {dispatch: false}
  )

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<LogoutAction>(AuthActionTypes.Logout),
        tap(
          () => {
            localStorage.removeItem('token')
            this.router.navigateByUrl('login')
          }
        )
      ),
      {dispatch: false}
  )

  constructor(private actions$: Actions, private router: Router) {}

}
