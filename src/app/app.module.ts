import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CorsInterceptor } from './interceptor/cors-interceptor';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { LoginComponent } from './component/login/login.component';
import { LoginManagerComponent } from './page/login-manager/login-manager.component';
import { LoginEmployeComponent } from './page/login-employe/login-employe.component';
import { LoginClientComponent } from './page/login-client/login-client.component';
import { RegisterComponent } from './component/register/register.component';
import { HeaderManagerComponent } from './component/header/header-manager/header-manager.component';
import { BottomComponent } from './component/bottom/bottom.component';
import { AccueilManagerComponent } from './page/accueil-manager/accueil-manager.component';
import { HeaderOptionComponent } from './component/header-option/header-option.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { ServiceListComponent } from './page/service-list/service-list.component';
import { ServiceDialogComponent } from './component/service-dialog/service-dialog.component';
import { DepenseCrudComponent } from './component/depense-crud/depense-crud.component';
import { DepenseDialogComponent } from './component/depense-dialog/depense-dialog.component';
import { HeaderEmployeComponent } from './component/header-employe/header-employe.component';
import { DiaryComponent } from './component/diary/diary.component';
import { AddUnavailabilityModalComponent } from './component/add-unavailability-modal/add-unavailability-modal.component';
import { AppointmentEmployeComponent } from './component/appointment-employe/appointment-employe.component';
import { EventModalComponent } from './component/event-modal/event-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskComponent } from './component/task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { IndisponibiliteComponent } from './page/indisponibilite/indisponibilite.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IndisponibiliteModalComponent } from './page/indisponibilte/indisponibilite-modal/indisponibilite-modal.component';
import { UserComponent } from './component/user/user.component';
import { UserAddModalComponent } from './component/user/user-add-modal/user-add-modal.component';
import { UserEditModalComponent } from './component/user/user-edit-modal/user-edit-modal.component';
import { UserDeleteModalComponent } from './component/user/user-delete-modal/user-delete-modal.component';
import { StatistiqueComponent } from './component/statistique/statistique.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OffreSpecialComponent } from './page/offre-special/offre-special.component';
import { AddOffSpecialModalComponent } from './page/offre-special/add-off-special-modal/add-off-special-modal.component';
import { DeleteOffModalComponent } from './page/offre-special/delete-off-modal/delete-off-modal.component';
import { UnauthorizedComponent } from './page/unauthorized/unauthorized.component';
import { ProfilComponent } from './component/profil/profil.component';
import { ProfilModalComponent } from './component/profil/profil-modal/profil-modal.component';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { EmployeLayoutComponent } from './layout/employe-layout/employe-layout.component';
import { PreferenceComponent } from './component/preference/preference.component';
import { ListeComponent } from './component/liste/liste.component';
import { ListComponent } from './component/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginManagerComponent,
    LoginEmployeComponent,
    LoginClientComponent,
    RegisterComponent,
    HeaderManagerComponent,
    BottomComponent,
    AccueilManagerComponent,
    HeaderOptionComponent,
    ServiceListComponent,
    ServiceDialogComponent,
    DepenseCrudComponent,
    DepenseDialogComponent,
    HeaderEmployeComponent,
    DiaryComponent,
    AddUnavailabilityModalComponent,
    AppointmentEmployeComponent,
    EventModalComponent,
    TaskComponent,
    IndisponibiliteComponent,
    IndisponibiliteModalComponent,
    UserComponent,
    UserAddModalComponent,
    UserEditModalComponent,
    UserDeleteModalComponent,
    StatistiqueComponent,
    OffreSpecialComponent,
    AddOffSpecialModalComponent,
    DeleteOffModalComponent,
    UnauthorizedComponent,
    ProfilComponent,
    ProfilModalComponent,
    ManagerLayoutComponent,
    EmployeLayoutComponent,
    PreferenceComponent,
    ListeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    ToastrModule.forRoot(),
    FullCalendarModule,
    MatDialogModule,
    DragDropModule,
    MatProgressSpinnerModule,
    NgxSkeletonLoaderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgApexchartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
