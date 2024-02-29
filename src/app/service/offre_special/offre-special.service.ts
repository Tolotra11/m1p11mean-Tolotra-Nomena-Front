import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from '../../utils/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreSpecialService {

  constructor(private http: HttpClient) { }

  create(data:any): Observable<any> {
    return this.http.post(`${base_url}/managers/offre_special`, data);
  }

  list( idService: string, reduction: string, dateDebut: string, dateFin: string, page: string, limit: string):Observable<any[]>{
    let params = new HttpParams();
    params = params.append('idService', idService);
    params = params.append('reduction',reduction);
    params = params.append('dateDebut', dateDebut);
    params = params.append('dateFin', dateFin);
    params = params.append('page', page);
    params = params.append('limit', limit);
    return this.http.get<any[]>(`${base_url}/offre_specials`, { params: params });
  }

  delete( id: string):Observable<any>{
    return this.http.delete<any>(`${base_url}/managers/offre_specials/${id}`);
  }
}
