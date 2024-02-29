import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { base_url } from '../../utils/url';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http : HttpClient) { }

  getProfil():Observable<any>{
    return this.http.get(base_url+'/employes/profil');
  }

  updateUserM(userId: string, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${base_url}/employes/users/${userId}`, updatedUser);
  }
}