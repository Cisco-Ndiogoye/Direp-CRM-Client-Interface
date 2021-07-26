import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

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

  async addUser() {
    
  }



}
