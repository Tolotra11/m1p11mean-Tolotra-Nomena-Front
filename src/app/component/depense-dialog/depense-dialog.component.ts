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
    templateUrl: './depense-dialog.component.html',
  })
  export class DepenseDialogComponent {
    error='';
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
          error = error.message;
          console.error(error);
        }
      );
    }
  }
  