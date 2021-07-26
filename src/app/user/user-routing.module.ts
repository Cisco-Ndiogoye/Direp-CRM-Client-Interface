import { AddUserComponent } from './add-user/add-user.component';
import { PasswordModificationComponent } from './password-modification/password-modification.component';
import { ProfileModificationComponent } from './profile-modification/profile-modification.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path:'add', component: AddUserComponent},
  {path: 'modify', component: ProfileModificationComponent},
  {path: 'change-my-password', component: PasswordModificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
