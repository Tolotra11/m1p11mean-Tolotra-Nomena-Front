import { Component, OnInit } from '@angular/core';
import { PushnotificationService } from './service/pushNotification/pushnotification.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'm1p11mean-Tolotra-Nomena-Front';
  constructor(private pushNotification: PushnotificationService, private authService: AuthService){};
  ngOnInit() {
    this.pushNotification.listenForMessage();
  }
  getLogingStatus(){
    return this.authService.isLoggedIn();
  }

  getRoleStatus(){
    return this.authService.getRole();
  }
}
