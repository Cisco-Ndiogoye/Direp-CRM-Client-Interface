import { DashboardComponent } from './pages/dashboard-page/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/authentication/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/user/user.module').then(u => u.UserModule)
  },
  {
    path: 'prescriber',
    loadChildren: () => import('./features/prescriber/prescriber.module').then(p => p.PrescriberModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
