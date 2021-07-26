import { Account } from './../account/account';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private subs = new SubSink()
  account: Account = new Account()
  constructor(private router: Router) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
  }

  goToModificationPage() {
    this.router.navigate(['profile/modify'])
  }

  goToPasswordModificationPage() {
    this.router.navigate(['profile/change-my-password'])
  }

}
