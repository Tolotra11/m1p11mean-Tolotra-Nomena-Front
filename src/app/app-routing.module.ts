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
import { IndisponibiliteComponent } from './page/indisponibilite/indisponibilite.component';
import { UserComponent } from './component/user/user.component';
import { StatistiqueComponent } from './component/statistique/statistique.component';
import { OffreSpecialComponent } from './page/offre-special/offre-special.component';
import { UnauthorizedComponent } from './page/unauthorized/unauthorized.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ListComponent } from './component/list/list.component';
import { PreferenceComponent } from './component/preference/preference.component';

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
    path:'manager/user',component: UserComponent
  },
  {
    path:'manager/dashboard',component: StatistiqueComponent
  },
  {
    path:'manager/offreSpecial',component: OffreSpecialComponent
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
    path: 'employe/horaire', component: IndisponibiliteComponent
  },
  {
    path:'profil',component: ProfilComponent
  },
  {
    path:'client/login',component: LoginClientComponent
  },{
    path:'client/register',component: RegisterComponent
  },
  {
    path:'client/list',component: ListComponent
  },
  {
    path:'client/preference',component: PreferenceComponent
  }
  ,{
    path:'Unauthorized',component: UnauthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
