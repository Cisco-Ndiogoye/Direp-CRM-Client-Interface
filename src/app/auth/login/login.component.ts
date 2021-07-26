import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectIsLoggedInSelector } from './../state/auth.selector';
import { Login } from './../state/auth.actions';
import { tap } from 'rxjs/operators';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from './../../reducers';
import { noop, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  loginError = ''
  redirectUrl: string
  readonly isLogguedIn: Observable<Boolean>

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.isLogguedIn = this.store.pipe(
      select(selectIsLoggedInSelector)
    )
   }


  get f() { return this.userForm.controls }

  login() {
    console.log('Login action triggered.')
    console.log(this.f.username.value + ' ' + this.f.password.value)
    /**
    this.authService
      .login(this.f.username.value, this.f.password.value)
      .pipe(
        tap(token =>{
          this.store.dispatch(new Login(token))
          console.log('Loggued In successfully')
        }),
      )
      .subscribe(
        noop,
        (err) => {
          console.log(err),
          this.loginError = err.error.Echec
          console.log(this.loginError)
        }
      )
      **/
      //console.log('IsLoggedIn: ' + this.isLogguedIn)
  }



}
