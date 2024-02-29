import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OffreSpecialService } from '../../../service/offre_special/offre-special.service';

@Component({
  selector: 'app-delete-off-modal',
  templateUrl: './delete-off-modal.component.html',
  styleUrl: './delete-off-modal.component.css'
})
export class DeleteOffModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteOffModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private offreService : OffreSpecialService
  ) {
  }

  delete(){
    try{
        this.offreService.delete(this.data.event._id).subscribe({
            next: (res)=>{
              console.log('delete');
              this.dialogRef.close();
            },
            error: (error)=>{
              console.error(error);
            }          
        })
    }
    catch(error){
      console.error(error);
    }
  }
}
