import { Component, OnInit } from '@angular/core';
import { OffreSpecialService } from '../../service/offre_special/offre-special.service';
import { MatDialog } from '@angular/material/dialog';
import { error } from 'jquery';
import { ServiceService } from '../../service/service/service.service';
import { Service } from '../../model/service.model';
import { formatDateString } from '../../utils/utils';
import { AddOffSpecialModalComponent } from './add-off-special-modal/add-off-special-modal.component';
import { DeleteOffModalComponent } from './delete-off-modal/delete-off-modal.component';

@Component({
  selector: 'app-offre-special',
  templateUrl: './offre-special.component.html',
  styleUrl: './offre-special.component.css'
})
export class OffreSpecialComponent implements OnInit{
    formatteDateHeureString = formatDateString;
    services:Service[] = [];
    offreSpeciales: any[] = [];
    idService = '';
    reduction = '';
    dateDebut = '';
    dateFin = '';
    page: number = 0;
    limit: number = 10;
    isLoading: boolean = true;
    constructor(private dialog: MatDialog, private offreSpecialService: OffreSpecialService, private service : ServiceService) { }

    ngOnInit(): void {
      this.isLoading = true;
      this.loadServices();
      this.loadOffres();
      this.isLoading = false;
    }
    loadServices(){
        this.service.getAllServices().subscribe({
            next: (res) =>{
              this.services = res;
            },
            error:(error)=>{
              console.error(error);
            }
        });
    }
    loadOffres(){
      
      this.offreSpecialService.list(this.idService,this.reduction,this.dateDebut,this.dateFin,this.page.toString(),this.limit.toString()).subscribe({
        next: (res) => {
            this.offreSpeciales = res;
        },
        error: (error) =>{
          console.log(error); // Gérez les erreurs de manière appropriée
          
        }
      })
    }

    searchOffres() {
      this.page = 0;
      if(this.reduction == null){
        this.reduction = '';
      }
      this.loadOffres();
    }

    nextPage() {
      this.page++;
      this.loadOffres();
    }

    prevPage() {
      if (this.page > 0) {
        this.page--;
        this.loadOffres();
      }
    }

    addOffre() {
      // clickInfo contient les détails de l'événement cliqué, y compris l'objet event
      this.dialog.open(AddOffSpecialModalComponent, {
        width: '400px',
        data: { event: this.services}
      }).afterClosed().subscribe({
        next: (result)=>{
            this.isLoading=true;
            this.loadOffres();  
            this.isLoading=false;
        },
        error: (error)=>{
          console.error(error);
        }
      });
    }

    deleteOffre(offre:any) {
      // clickInfo contient les détails de l'événement cliqué, y compris l'objet event
      console.log(offre);
      this.dialog.open(DeleteOffModalComponent, {
        width: '400px',
        data: { event: offre}
      }).afterClosed().subscribe({
        next: (result)=>{
            this.isLoading=true;
            this.loadOffres();  
            this.isLoading=false;
        },
        error: (error)=>{
          console.error(error);
        }
      });
    }
}
