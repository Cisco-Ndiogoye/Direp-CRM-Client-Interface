import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { faBars, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

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
    this.router.navigate(['/login'])
  }

  goToProfile() {
    this.router.navigate(['profile'])
  }


}
