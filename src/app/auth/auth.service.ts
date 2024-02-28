import { Injectable } from '@angular/core';
import { base_url } from '../utils/url';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private authTokenKey = 'authToken';
  private role = 'role';
  constructor(private http: HttpClient ,private router: Router) { }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' // Permettre l'accès depuis n'importe quelle origine
  });


  login(data:any , role: number):Observable<any> {
      let url = base_url+'/auth/';
      if(role === 10){
        url += 'loginClient';
      }
      else if(role === 20){
        url += 'loginEmploye';
      }
      else{
        url += 'loginManager';
      }
      return this.http.post<any>(url,data);
  }

  register(data:User):Observable<any>{
    let url = base_url+'/auth/registerClient';
    return this.http.post(url,data);
  }

  
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  getRole(): string | null {
    return localStorage.getItem(this.role);
  }

  addRole(role:string):void{
    localStorage.setItem(this.role, role);
  }

  addAuthToken(token:string):void{
    localStorage.setItem(this.authTokenKey, token);
  }
  logout():void {
    const role = this.getRole();
    let link = '';
    if(role == '10'){
      link = '/client/login';
    }
    else if(role == '20'){
      link = 'employe/login';
    }
    else{
      link = 'manager/login';
    }

    localStorage.removeItem(this.authTokenKey);
    this.router.navigate([link]);
  }
}
