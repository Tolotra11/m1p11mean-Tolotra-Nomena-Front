import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { base_url } from '../../utils/url';
import { RendezVous } from '../../model/rdv.model';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  constructor(private http: HttpClient) { }

  getTask(): Observable<any> {
    return this.http.get<any>(`${base_url}/employes/tasks`);
  }

  getRdv(): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(`${base_url}/employes/employee`);
  }

  cancelRdv(id: string): Observable<any> {
    return this.http.get<any>(`${base_url}/employes/valider_un_rdv?id=${id}&status=-10`).pipe(
      catchError(this.handleError)
    );
  }

  indisponibiliseRdv(dateDebut: Date, dateFin: Date): Observable<any> {
    // Construire le corps de la requête avec les données nécessaires
    const body = {
      dateheuredebut: dateDebut,
      dateheurefin: dateFin,
      status: 0,
    };
    console.log(body);
    // Effectuer la requête POST vers l'API backend
    return this.http.post<any>(`${base_url}/employes/inserer_rdv`, body).pipe(
      catchError(this.handleError)
    );
  }


  getMyAppointmate():Observable<RendezVous[]>{
      return this.http.get<RendezVous[]>(base_url+'/employes/rdvs');
  }

  convertRdvToEvent(rdv:RendezVous[]){
      const events = [];
      for(let i = 0; i< rdv.length; i++){
          events.push({
            title: rdv[i].service ? rdv[i].service.nom : 'Indisponibilité',
            start: rdv[i].dateheuredebut,
            end: rdv[i].dateheurefin,
            color: rdv[i].status == 10 ? 'green' : 'red',
            extendedProps:{
              rdv: rdv[i]
            }
          });
      }
      return events;
  }
  private handleError(error: any) {
    console.error('Une erreur s\'est produite : ', error);
    return throwError('Une erreur s\'est produite, veuillez réessayer plus tard.');
  }

  doneRdv(id: string): Observable<any> {
    return this.http.get<any>(`${base_url}/employes/tasks/done?id=${id}&etat=10`).pipe(
      catchError(this.handleError)
    );
  }

  rollBackRdv(id: string): Observable<any> {
    return this.http.get<any>(`${base_url}/employes/tasks/done?id=${id}&etat=1`).pipe(
      catchError(this.handleError)
    );
  }

  getUnavailibity(): Observable<any> {
    return this.http.get<any>(`${base_url}/employes/unaivalability`).pipe(
      catchError(this.handleError)
    );
  }

  delete(id:any):Observable<any>{
    return this.http.delete(`${base_url}/employes/rdv/${id}`);
  }

}