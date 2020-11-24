import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';

import { AuthGuard } from './helpers/auth-guard.service';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'no-access', component: NoAccessComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
