import { Component, Inject } from '@angular/core';
import { ServiceService } from '../../service/service/service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  service: any;
  isNew: boolean;
}

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrl: './service-dialog.component.css'
})
export class ServiceDialogComponent {
  error : string = '';
  constructor(private serviceService: ServiceService,
    public dialogRef: MatDialogRef<ServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    modifierService() {
      this.serviceService.updateService(this.data.service.id,this.data.service).subscribe({
        next:(response) => {
          console.log('Service mis à jour avec succès', response);
          this.dialogRef.close();
        },
        error:(error) => {
          console.error('Erreur lors de la mise à jour du service', error);
          this.error = error.error.message;
        }
      }  
      );
    }
  
    ajouterService() {
      this.serviceService.createService(this.data.service).subscribe(
        {
          next:(response) => {
            console.log('Service ajouté avec succès', response);
            this.dialogRef.close();
          },
          error:(error) => {
            console.error('Erreur lors de l"ajout du service', error);
            this.error = error.error.message;
          }
        }
      );
    }
}
