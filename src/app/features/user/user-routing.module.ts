import { AddUserComponent } from '../../pages/user-creation-page/add-user.component';
import { PasswordModificationComponent } from '../../pages/password-modification-page/password-modification.component';
import { ProfileModificationComponent } from '../../pages/user-modification-page/profile-modification.component';
import { ProfileComponent } from '../../pages/user-details/profile.component';
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
