import { Component, OnInit } from '@angular/core';
import { RdvService } from '../../service/rdv/rdv.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import { EventModalComponent } from '../event-modal/event-modal.component';
@Component({
  selector: 'app-appointment-employe',
  templateUrl: './appointment-employe.component.html',
  styleUrl: './appointment-employe.component.css'
})
export class AppointmentEmployeComponent implements OnInit{
  loading = true;
  selectedEvent: any;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    locale:'fr',
    timeZone:'Africa/Nairobi',
    allDaySlot: false, 
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    buttonText: {
      today: 'Aujourd\'hui',
      month: 'Mois',
      week: 'Semaine',
      day: 'Jour',
      list: 'Liste'
    },
    views: {
      month: { buttonText: 'Mois' },
      week: { buttonText: 'Semaine' },
      day: { buttonText: 'Jour' },
      list: { buttonText: 'Liste' }
    },
    events: [],
    eventClick: this.handleEventClick.bind(this) // Initialisation vide des événements
  };
  constructor(private eventService: RdvService,private dialog: MatDialog){}
  ngOnInit(): void {
    this.loadEvents();
    
  }

  loadEvents() {
    this.eventService.getMyAppointmate().subscribe({
      next:(res)=>{
          this.calendarOptions.events = this.eventService.convertRdvToEvent(res);
          this.loading = false;
      },
      error:(error)=>{
        console.error(error);
      }
    })
  }

  handleEventClick(clickInfo: any) {
    // clickInfo contient les détails de l'événement cliqué, y compris l'objet event
    this.dialog.open(EventModalComponent, {
      width: '400px',
      data: { event: clickInfo.event }
    });
    
  }
}
