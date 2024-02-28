import { Component, Inject } from '@angular/core';
import { formatDateString, formatHeure } from '../../../utils/utils';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   
  }
}
