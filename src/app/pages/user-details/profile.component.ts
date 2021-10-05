import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../core/reducer';
import { Account } from 'src/app/core/classes/account';
import { selectAccountSelector } from '../../features/user/user-state/user.selectors';
import { IJwtToken } from '../../core/interfaces/ijwttoken.interface';
import { LoadUser } from '../../features/user/user-state/user.actions'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  readonly account$: Observable<Account>

  constructor(private router: Router, private store: Store<AppState>) {
    this.account$ = this.store.pipe(select(selectAccountSelector))
    const token : string | null = localStorage.getItem('token')
    if(token) {
      const jwt = jwt_decode(token) as IJwtToken
      this.store.dispatch(new LoadUser(jwt.account))
    } else {
      this.router.navigate(['login'])
    }
  }

  ngOnInit(): void {

  }

  goToModificationPage() {
    this.router.navigate(['profile/modify'])
  }

  goToUserCreationPage() {
    this.router.navigate(['profile/add'])
  }

  goToPasswordModificationPage() {
    this.router.navigate(['profile/change-my-password'])
  }

}
