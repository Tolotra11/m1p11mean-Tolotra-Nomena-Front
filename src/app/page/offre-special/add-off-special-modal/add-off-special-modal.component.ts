import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OffreSpecialService } from '../../../service/offre_special/offre-special.service';

@Component({
  selector: 'app-add-off-special-modal',
  templateUrl: './add-off-special-modal.component.html',
  styleUrl: './add-off-special-modal.component.css'
})
export class AddOffSpecialModalComponent {
  error='';
  idService='';
  reduction='';
  dateDebut='';
  dateFin='';
  constructor(
    public dialogRef: MatDialogRef<AddOffSpecialModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private offreService : OffreSpecialService
  ) {
  }

  save(){
    this.offreService.create({
      idService : this.idService,
      reduction:this.reduction,
      dateDebut:this.dateDebut,
      dateFin: this.dateFin
    }).subscribe({
        next:(res)=>{
          this.dialogRef.close();
        },
        error:(error)=>{
          this.error = error.error.message;
        }
    });
   
  }
}
