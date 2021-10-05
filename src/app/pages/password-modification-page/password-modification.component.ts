import { Account } from './../../core/classes/account';
import { AccountService } from './../../core/services/account.service';
import { map } from 'rxjs/operators';
import { Observable, noop } from 'rxjs';
import { PasswordDTO } from '../../core/classes/passwordDTO';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../core/reducer';
import { selectAccountSelector } from '../../features/user/user-state/user.selectors';

@Component({
  selector: 'app-password-modification',
  templateUrl: './password-modification.component.html',
  styleUrls: ['./password-modification.component.scss']
})
export class PasswordModificationComponent implements OnInit {

  passwordDTO : PasswordDTO = new PasswordDTO()
  readonly account$: Observable<Account>
  id: number = 0

  constructor(private store: Store<AppState>, private accountService: AccountService) {
    this.account$ = this.store.pipe(select(selectAccountSelector))


  }

  ngOnInit(): void {
  }

  modify() {
    this.account$.pipe(
      map(account => {
        this.id = account.id
      })
    ).subscribe(
      noop,
      err => console.log(err)
    )
    this.accountService.updatePassword(this.passwordDTO, this.id).pipe(
      map(
        resp => {
          console.log(resp)
        }
      )
    ).subscribe(
      noop,
      err => {
        console.log(err)
      }
    )
  }

}
