import { AppComponentFacade } from './../../app.component.facade';
import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  readonly isLoggedIn$: Observable<Boolean>;

  constructor(
    protected _authService: AuthService,
    protected router: Router,
    protected facade: AppComponentFacade
  ) {
    this.isLoggedIn$ = this.facade.isLoggedIn$;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.isLoggedIn$) {
      return true
    } else {
      this.showAlert();
      this.router.navigate(['login'], {
        queryParams: {
          redirectUrl: this.getResolvedUrl(childRoute),
        },
      })
    }
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.isLoggedIn$) { return true }
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  private showAlert() {
    console.log('Vous devez vous connecter.')
  }

  getResolvedUrl(route?: ActivatedRouteSnapshot): string {
    if (!route) {
      return ''
    }

    return route.pathFromRoot
      .map((r) => r.url.map((segment) => segment.toString()).join('/'))
      .join('/')
      .replace('//', '/')
  }

}
