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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginManagerComponent,
    LoginEmployeComponent,
    LoginClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
