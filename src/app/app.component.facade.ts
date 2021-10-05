import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from './core/reducer';
import {LogoutAction} from './features/authentication/authentication-state/auth.actions';
import {selectIsLoggedInSelector, selectIsLoggedOutSelector} from './features/authentication/authentication-state/auth.selector';

@Injectable()
export class AppComponentFacade {
    readonly isLoggedIn$: Observable<boolean>;
    readonly isLoggedOut$: Observable<boolean>;


    constructor(private readonly _store: Store<AppState>, private router: Router) {
      this.isLoggedIn$ = this._store.pipe(select(selectIsLoggedInSelector));
      this.isLoggedOut$ = this._store.pipe(select(selectIsLoggedOutSelector));
    }

    logout(): void {
      this._store.dispatch(new LogoutAction());
      //this.router.navigate(['/login'])
    }
}
