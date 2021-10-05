import { PrescriberEffects } from './prescriber-state/prescriber.effects';
import { AngularMaterialModule } from './../../angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prescriberReducer } from './prescriber-state/prescriber.reducer'

import { PrescriberRoutingModule } from './prescriber-routing.module';
import { PrescribersListPageComponent } from '../../pages/prescribers-list-page/prescribers-list-page.component';
import { PrescribersDetailsPageComponent } from '../../pages/prescribers-details-page/prescribers-details-page.component';
import { PrescriberCreationPageComponent } from '../../pages/prescriber-creation-page/prescriber-creation-page.component';
import { PrescriberModificationPageComponent } from '../../pages/prescriber-modification-page/prescriber-modification-page.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    PrescribersListPageComponent,
    PrescribersDetailsPageComponent,
    PrescriberCreationPageComponent,
    PrescriberModificationPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    PrescriberRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('prescriber', prescriberReducer),
    EffectsModule.forFeature([PrescriberEffects])
  ],
  providers: []
})
export class PrescriberModule { }
