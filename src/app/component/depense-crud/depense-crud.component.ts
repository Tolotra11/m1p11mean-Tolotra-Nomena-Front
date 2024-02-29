import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DepenseService } from '../../service/depense/depense.service';
import { DepenseDialogComponent } from '../depense-dialog/depense-dialog.component';
import { formatDateString, formatHeure } from '../../utils/utils';

@Component({
  selector: 'app-depense-crud',
  templateUrl: './depense-crud.component.html',
  styleUrl: './depense-crud.component.css'
})
export class DepenseCrudComponent implements OnInit {
  formatterDate = formatDateString;
  depenses: any[] = [];
  depense_detail: any;
  recherche = { libelle: '', date: '', depense: ''};
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['date', 'libelle', 'depense','actions'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private depenseService: DepenseService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listedepenses();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listedepenses() {
    this.depenseService.getAllDepenses().subscribe(
      (data: any[]) => {
        this.depenses = data;
        this.dataSource.data = this.depenses;
      },
      (error) => console.error(error)
    );
  }

  rechercherDepenses() {
    const query: { [key: string]: any } = {};
  
    if (this.recherche.libelle) {
      query['libelle'] = this.recherche.libelle;
    }
  
    if (this.recherche.date) {
      query['date'] = this.recherche.date;
    }
  
    if (this.recherche.depense) {
      query['depense'] = this.recherche.depense;
    }
  
    this.depenseService.searchDepense(query).subscribe(
      (data: any[]) => this.dataSource.data = data,
      (error) => console.error(error)
    );
  }

  openModalDepense(depense: any) {
    const dialogRef = this.dialog.open(DepenseDialogComponent, {
      width: '500px',
      data: { depense: depense, isNew: false }
    });
  }
  creerDepense(){
    const dialogRef = this.dialog.open(DepenseDialogComponent, {
      width: '500px',
      data: { depense: {}, isNew: true }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listedepenses();
    });
  }

  supprimerDepense(depense: any) {
    this.depenseService.deleteDepense(depense.id).subscribe(
      (response) => {
        console.log('Dépense supprimé avec succès', response);
        this.listedepenses();
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la dépense', error);
      }
    );
  }
}