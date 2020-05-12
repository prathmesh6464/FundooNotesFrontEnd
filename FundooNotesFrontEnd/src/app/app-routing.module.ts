import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [{path:'', component:LoginComponent},
{path:'user/forgetpassword', component:ForgetpasswordComponent},
{path:'user/registration', component:RegistrationComponent},
{path:'user/resetpassword/:token/:emailid', component:ResetpasswordComponent},
{path:'user/dashboard',component:DashBoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ForgetpasswordComponent, RegistrationComponent, ResetpasswordComponent];
