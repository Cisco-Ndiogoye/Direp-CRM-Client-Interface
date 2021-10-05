import { DashboardComponent } from './pages/dashboard-page/dashboard.component';
import { PrescriberModule } from './features/prescriber/prescriber.module';
import { UserModule } from './features/user/user.module';
import { AngularMaterialModule } from './angular-material.module';
import { SimpleDialogComponent } from './shared/simple-dialog/simple-dialog.component';
import { CoreEffects } from './core/core.effects';
import { reducers, metaReducers } from './core/reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './pages/header-page/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './features/authentication/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas, faBars, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SimpleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthModule,
    UserModule,
    PrescriberModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CoreEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents: [SimpleDialogComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faBars);
    library.addIcons(faUserCircle);
    library.addIcons(faSignOutAlt);
  }
}
