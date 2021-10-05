import { PrescriberModificationPageComponent } from '../../pages/prescriber-modification-page/prescriber-modification-page.component';
import { PrescriberCreationPageComponent } from '../../pages/prescriber-creation-page/prescriber-creation-page.component';
import { PrescribersDetailsPageComponent } from '../../pages/prescribers-details-page/prescribers-details-page.component';
import { PrescribersListPageComponent } from '../../pages/prescribers-list-page/prescribers-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PrescribersListPageComponent},
  {path: ':id', component: PrescribersDetailsPageComponent},
  {path: 'create', component: PrescriberCreationPageComponent},
  {path: 'modify', component: PrescriberModificationPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriberRoutingModule { }
