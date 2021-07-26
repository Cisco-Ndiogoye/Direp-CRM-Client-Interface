import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-modification',
  templateUrl: './password-modification.component.html',
  styleUrls: ['./password-modification.component.scss']
})
export class PasswordModificationComponent implements OnInit {

  userForm = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
    rePassword: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

  async modify() {

  }

}
