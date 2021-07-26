import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import { Login, AuthActionTypes, Logout } from './auth.actions';




@Injectable()
export class AuthEffects {


  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<Login>(AuthActionTypes.LoginAction),
        tap(action => localStorage.setItem('token', action.token))
      ),
    {dispatch: false}
  )

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<Logout>(AuthActionTypes.LogoutAction),
        tap(
          () => {
            localStorage.removeItem('token')
            this.router.navigate(['profile'])
          }
        )
      )
  )

  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT),
        map(() => {
          const token = localStorage.getItem('token')
          if (token) {
            return new Login(token)
          } else {
            return new Logout()
          }
        })
      )
  )

  constructor(private actions$: Actions, private router: Router) {}


}
