import { LogoutAction } from '../../features/authentication/authentication-state/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { faBars, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _store: Store, private router: Router) { }

  faBars = faBars
  faUserCircle = faUserCircle
  faSignOutAlt = faSignOutAlt

  ngOnInit(): void {
  }

  myFunction(): void {
    const x = document.getElementById('nav-links');
    if (x.className === 'nav-links') {
      x.className += ' responsive';
    } else {
      x.className = 'nav-links';
    }
  }

  logOut() {
    this._store.dispatch(new LogoutAction())
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }

  goToPrescriber() {
    this.router.navigate(['prescriber'])
  }


}
