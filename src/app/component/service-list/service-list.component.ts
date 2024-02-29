import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../../service/service/service.service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceDialogComponent } from '../service-dialog/service-dialog.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent  implements OnInit{
  services: any[] = [];
  service_detail: any;
  recherche = { nom: '', prix: '', delai: '', commission: '' };
  displayedColumns: string[] = ['nom', 'prix', 'delai', 'commission','actions'];
  
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private serviceService: ServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listeservices();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listeservices() {
    this.serviceService.getAllServices().subscribe(
      {
        next:(data: any[]) => {
          this.services = data;
          this.dataSource.data = this.services;
        },
        error:(error) => console.error(error)
      }
    );
  }

  rechercherServices() {
    const query: { [key: string]: any } = {};
  
    if (this.recherche.nom) {
      query['nom'] = this.recherche.nom;
    }
  
    if (this.recherche.prix) {
      query['prix'] = this.recherche.prix;
    }
  
    if (this.recherche.delai) {
      query['delai'] = this.recherche.delai;
    }
  
    if (this.recherche.commission) {
      query['commission'] = this.recherche.commission;
    }
  
    this.serviceService.searchService(query).subscribe({
      next:(data: any[]) => this.dataSource.data = data,
      error:(error) => console.error(error)
    }
    );
  }
  


  openModalService(service: any) {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      width: '500px',
      data: { service: service, isNew: false }
    });
  }
  creerService(){
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      width: '500px',
      data: { service: {}, isNew: true }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listeservices();
    });
  }

  supprimerService(service: any) {
    this.serviceService.deleteService(service.id).subscribe({
      next:(response) => {
        console.log('Service supprimé avec succès', response);
        this.listeservices();
      },
      error:(error) => {
        console.error('Erreur lors de la mise à jour du service', error);
      }
    }
    );
  }
}
