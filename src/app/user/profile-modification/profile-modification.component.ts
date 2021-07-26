import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-modification',
  templateUrl: './profile-modification.component.html',
  styleUrls: ['./profile-modification.component.scss']
})
export class ProfileModificationComponent implements OnInit {

  userForm = new FormGroup({
    role: new FormControl(''),
    equipe: new FormControl(''),
    nom: new FormControl(''),
    prenom: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  async modify() {}

}
