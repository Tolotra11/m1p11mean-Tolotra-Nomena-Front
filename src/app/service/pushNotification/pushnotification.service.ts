import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from '../../../firebase/firebaseConfig';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PushnotificationService {
  token = localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
     'Authorization':this.token || '' // Permettre l'accès depuis n'importe quelle origine
  });
  constructor(private http: HttpClient) { }

  async requestPermission() {
    const permission = await Notification.requestPermission();
    if(permission === "granted"){
      const token_registration = await getToken(messaging,{
        vapidKey: environment.firebaseConfig.vapidKey
      });
      console.log(token_registration);
      // return this.http.post(base_url+'/devices', {
      //     token_registration: token_registration
      // },{
      //   headers: this.headers
      // })
    }else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  async listenForMessage(){
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
    });
  }
}

