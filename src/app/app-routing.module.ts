import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginManagerComponent } from './page/login-manager/login-manager.component';

const routes: Routes = [
  {
    path:'manager/login', component: LoginManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
