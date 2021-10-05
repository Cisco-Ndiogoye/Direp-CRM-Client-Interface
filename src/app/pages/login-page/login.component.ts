import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAction } from '../../features/authentication/authentication-state/auth.actions';
import { tap} from 'rxjs/operators';
import { AuthService } from '../../features/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/reducer';
import { noop, Observable } from 'rxjs';
import { AppComponentFacade } from 'src/app/app.component.facade';
import { SubSink } from 'subsink'
import { ActivatedRoute, Router } from '@angular/router';

export class Creds {
  username: string
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private subs = new SubSink()
  readonly isLoggedIn$: Observable<boolean>;
  form: FormGroup
  loginError = ''
  redirectUrl: string

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router,
    route: ActivatedRoute,
    private fb: FormBuilder,
    private readonly _appComponentFacade: AppComponentFacade
  ) {
    this.subs.sink = route.paramMap.subscribe(
      (params) => (this.redirectUrl = params.get('redirectUrl') ?? '')
    )
    this.isLoggedIn$ = this._appComponentFacade.isLoggedIn$;
    this.isLoggedIn$.pipe(
      tap(value => {
        if(value) {
          switch (this.redirectUrl) {

            case 'login':
              this.router.navigate(['profile'])
              break;

            case '':
              this.router.navigate(['profile'])
              break;

            default:
              this.router.navigate([this.redirectUrl])
              break;
          }
        }
      })
    )
  }

  buildForm() {
    this.form = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  login() {
    const formValue = this.form.value as {username: string, password: string}
    this.authService
      .login(formValue.username, formValue.password)
      .pipe(
        tap(resp =>{
          this.store.dispatch(new LoginAction(resp))
        }),
      )
      .subscribe(
        noop,
        (err) => {
          this.loginError = err.error.Echec
          console.log(this.loginError)
        }
      )
  }



}
