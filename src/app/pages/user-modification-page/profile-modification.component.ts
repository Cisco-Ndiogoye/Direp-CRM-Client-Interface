import { selectAccountSelector } from '../../features/user/user-state/user.selectors';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { UpdateUser } from '../../features/user/user-state/user.actions';
import { Account } from 'src/app/core/classes/account';

@Component({
  selector: 'app-profile-modification',
  templateUrl: './profile-modification.component.html',
  styleUrls: ['./profile-modification.component.scss']
})
export class ProfileModificationComponent implements OnInit {


  account : Account = new Account()

  constructor(private readonly _store: Store) {
    this._store.pipe(select(selectAccountSelector)).subscribe(resp => {
      this.account.firstName = resp.firstName
      this.account.lastName = resp.lastName
      this.account.email = resp.email
      this.account.id = resp.id
      this.account.role = resp.role
      this.account.username = resp.username
      this.account.phoneNumber = resp.phoneNumber
      this.account.team = resp.team
    })
  }

  ngOnInit(): void {}

  modify() {
    this._store.dispatch(new UpdateUser(this.account))
  }

}
