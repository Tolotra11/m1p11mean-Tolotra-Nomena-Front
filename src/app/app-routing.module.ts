import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginManagerComponent } from './page/login-manager/login-manager.component';
import { LoginEmployeComponent } from './page/login-employe/login-employe.component';
import { LoginClientComponent } from './page/login-client/login-client.component';
import { RegisterComponent } from './component/register/register.component';
import { AccueilManagerComponent } from './page/accueil-manager/accueil-manager.component';
import { DepenseCrudComponent } from './component/depense-crud/depense-crud.component';
import { DiaryComponent } from './component/diary/diary.component';
import { AppointmentEmployeComponent } from './component/appointment-employe/appointment-employe.component';
import { TaskComponent } from './component/task/task.component';

const routes: Routes = [
  {
    path:'manager/login', component: LoginManagerComponent
  },
  {
    path:'manager/accueil', component: AccueilManagerComponent
  },
  {
    path:'manager/depense',component: DepenseCrudComponent
  },
  {
    path:'employe/login', component: LoginEmployeComponent
  },
  {
    path: 'employe/rdv', component: AppointmentEmployeComponent
  },
  {
    path: 'employe/task', component: TaskComponent
  },
  {
    path: 'employe/horaire', component: DiaryComponent
  },
  {
    path:'client/login',component: LoginClientComponent
  },{
    path:'client/register',component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
