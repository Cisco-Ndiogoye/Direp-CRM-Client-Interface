import { TeamService } from '../../core/services/team.service';
import { AccountService } from '../../core/services/account.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserEffects } from './user-state/user.effects';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';


import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { userReducer } from './user-state/user.reducer';
import { AuthHttpInterceptor } from '../../core/interceptors/http-interceptor';
import { AddUserComponent } from '../../pages/user-creation-page/add-user.component';
import { PasswordModificationComponent } from '../../pages/password-modification-page/password-modification.component';
import { ProfileModificationComponent } from '../../pages/user-modification-page/profile-modification.component';
import { ProfileComponent } from '../../pages/user-details/profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileModificationComponent,
    PasswordModificationComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    UserRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [
    AccountService,
    TeamService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }
  ]
})
export class UserModule {}
