import { Component, Inject } from '@angular/core';
import { formatDateString, formatHeure } from '../../../utils/utils';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RdvService } from '../../../service/rdv/rdv.service';


@Component({
  selector: 'app-indisponibilite-modal',
  templateUrl: './indisponibilite-modal.component.html',
  styleUrl: './indisponibilite-modal.component.css'
})
export class IndisponibiliteModalComponent {
  formatter = formatDateString;
  formatTime = formatHeure;
  constructor(
    public dialogRef: MatDialogRef<IndisponibiliteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private rdvService: RdvService
  ) {
   
  }

  delete(){
    try{
      this.rdvService.delete(this.data.event.extendedProps.rdv._id).subscribe({
        next:(res)=>{
          console.log('Success');
          this.dialogRef.close();
        },
        error:(error)=>{
          console.error(error);
        }
      })
    }
    catch(error){
      console.error(error);
    }
  }
}
