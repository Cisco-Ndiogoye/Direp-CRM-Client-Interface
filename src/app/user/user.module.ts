import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModificationComponent } from './profile-modification/profile-modification.component';
import { PasswordModificationComponent } from './password-modification/password-modification.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileModificationComponent,
    PasswordModificationComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers: [ ]
})
export class UserModule { }
