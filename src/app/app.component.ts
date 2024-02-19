import { Component, OnInit } from '@angular/core';
import { PushnotificationService } from './service/pushNotification/pushnotification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'm1p11mean-Tolotra-Nomena-Front';
  constructor(private pushNotification: PushnotificationService){};
  ngOnInit() {
    // this.pushNotification.requestPermission();
    // this.pushNotification.listenForMessage();
  }
}
