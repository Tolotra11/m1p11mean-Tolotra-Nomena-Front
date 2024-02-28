import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDateString, formatHeure } from '../../utils/utils';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent {
  formatter = formatDateString;
  formatTime = formatHeure;
  optionsDateOnly = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }

  optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
  }
  constructor(
    public dialogRef: MatDialogRef<EventModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   
  }
}