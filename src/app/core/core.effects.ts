import jwt_decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { IJwtToken } from '../core/interfaces/ijwttoken.interface';

import { LoginAction, LogoutAction} from '../features/authentication/authentication-state/auth.actions'



@Injectable()
export class CoreEffects {

  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT),
        map(() => {
          const token: string | null = localStorage.getItem('token')
          if(token) {
            let jwtToken = jwt_decode(token) as IJwtToken
            if(token && this.tokenIsValid(jwtToken)) {
              this.router.navigate(['profile'])
              return new LoginAction(token)
            } else {
              localStorage.removeItem('token')
              this.router.navigate(['login'])
              return new LogoutAction()
            }
          } else {
            return new LogoutAction()
          }
        })
      )
  )

  constructor(private actions$: Actions, private router: Router) {}

  tokenIsValid(token: IJwtToken): boolean {
    if(new Date().getTime() < token.exp*1000) {
      return true
    }
    return false
  }

}
