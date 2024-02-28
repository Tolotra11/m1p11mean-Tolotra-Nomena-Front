import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginManagerComponent } from './page/login-manager/login-manager.component';
import { LoginEmployeComponent } from './page/login-employe/login-employe.component';
import { LoginClientComponent } from './page/login-client/login-client.component';

const routes: Routes = [
  {
    path:'manager/login', component: LoginManagerComponent
  },
  {
    path:'employe/login', component: LoginEmployeComponent
  },
  {
    path:'client/login',component: LoginClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
