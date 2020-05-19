import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'user/login', component: LoginComponent },
{ path: 'user/forgetpassword', component: ForgetpasswordComponent },
{ path: 'user/registration', component: RegistrationComponent },
{ path: 'user/resetpassword/:token/:emailid', component: ResetpasswordComponent },
{ path: 'user/dashboard', component: DashboardComponent },
{ path: 'user/dashboard', component: DashboardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ForgetpasswordComponent, RegistrationComponent, ResetpasswordComponent];
