import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepenseService } from '../../service/depense/depense.service';
import { formatDateString } from '../../utils/utils';


export interface DialogData {
  depense: any;
  isNew: boolean;
}

@Component({
    selector: 'app-service-dialog',
    template: `
      <h1 mat-dialog-title>{{ data.isNew ? 'Ajouter une dépense' : 'Modifier une dépense' }}</h1>
      <div mat-dialog-content>
        <mat-form-field appearance="fill">
          <mat-label>Dépense </mat-label>
          <input matInput [(ngModel)]="data.depense.libelle">
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Date</mat-label>
          <input matInput [(ngModel)]="data.depense.date" type="datetime-local">
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>Coût</mat-label>
          <input matInput [(ngModel)]="data.depense.depense">
        </mat-form-field>
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">Annuler</button>
        <button mat-button (click)="data.isNew ? ajouterDepense() : modifierDepense()">Enregistrer</button>
      </div>
    `,
  })
  export class DepenseDialogComponent {
    formattedDate = formatDateString;
    constructor(private depenseService: DepenseService,
      public dialogRef: MatDialogRef<DepenseDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    modifierDepense() {
      this.depenseService.updateDepense(this.data.depense.id,this.data.depense).subscribe(
        (response) => {
          console.log('Dépense mis à jour avec succès', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la dépense', error);
        }
      );
    }
  
    ajouterDepense() {
      this.depenseService.createDepense(this.data.depense).subscribe(
        (response) => {
          console.log('Dépense ajouté avec succès', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Erreur lors de l"ajout de la dépense', error);
        }
      );
    }
  }
  