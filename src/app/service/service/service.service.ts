import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from '../../utils/url';
import { Observable } from 'rxjs';
import { Service } from '../../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${base_url}/services/listeservices`);
  }

  createService(service: any): Observable<any> {
    return this.http.post(`${base_url}/managers/services`, service);
  }

  updateService(id: string, service: Service): Observable<any> {
    return this.http.put(`${base_url}/managers/services/${id}`, service);
  }

  deleteService(id: string): Observable<any> {
    return this.http.put(`${base_url}/managers/services/${id}`, {});
  }

  getServiceDetails(id: string): Observable<any> {
    return this.http.get(`${base_url}/managers/services/${id}`);
  }

  searchService(query: any): Observable<any> {
    return this.http.get(`${base_url}/services/search`, { params: query });
  }
}
