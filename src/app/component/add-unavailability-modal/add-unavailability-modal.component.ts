import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RdvService } from '../../service/rdv/rdv.service';

@Component({
  selector: 'app-add-unavailability-modal',
  templateUrl: './add-unavailability-modal.component.html',
  styleUrl: './add-unavailability-modal.component.css'
})
export class AddUnavailabilityModalComponent {
  errorMessage: string = ''; 
  successMessage: string = '';
  constructor(
    public dialogRef: MatDialogRef<AddUnavailabilityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private rendezVousService: RdvService
  ) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.rendezVousService.indisponibiliseRdv(this.data.startDateTime, this.data.endDateTime).subscribe(
      (res) => {
        console.log('Indisponibilité enregistrée avec succès !');
        this.successMessage = 'Indisponibilité enregistrée avec succès !';
        // Fermeture du dialogue après avoir enregistré les dates d'indisponibilité
        this.dialogRef.close({ success: true });
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
