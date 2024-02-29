import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { RdvService } from '../../service/rdv/rdv.service';
import { EventModalComponent } from '../../component/event-modal/event-modal.component';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import { AddUnavailabilityModalComponent } from '../../component/add-unavailability-modal/add-unavailability-modal.component';
import { IndisponibiliteModalComponent } from '../indisponibilte/indisponibilite-modal/indisponibilite-modal.component';

@Component({
  selector: 'app-indisponibilite',
  templateUrl: './indisponibilite.component.html',
  styleUrl: './indisponibilite.component.css'
})
export class IndisponibiliteComponent implements OnInit{
  loading = true;
  selectedEvent: any;
  calendarOptions: CalendarOptions = {
    plugins: [ timeGridPlugin, listPlugin],
    initialView: 'timeGridWeek',
    locale:'fr',
    timeZone:'Africa/Nairobi',
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
    allDaySlot:false,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    events: [] as EventInput[],
    eventClick: this.handleEventClick.bind(this) // Initialisation vide des événements
  };
  constructor(private eventService: RdvService,private dialog: MatDialog){}
  ngOnInit(): void {

    this.loadEvents();
    
  }

  loadEvents() {
    this.eventService.getUnavailibity().subscribe({
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
    this.dialog.open(IndisponibiliteModalComponent, {
      width: '400px',
      data: { event: clickInfo.event }
    }).afterClosed().subscribe(result=>{
      this.loadEvents();
    },
    error=>{
      console.log(error);
    });
    
  }

  UnavailabilityEventClick(){
    this.dialog.open(AddUnavailabilityModalComponent, {
      width: '400px',
      data: { event: {} }
    }).afterClosed().subscribe(result=>{
      this.loadEvents();
    },
    error=>{
      console.log(error);
    });
  }

  

}
