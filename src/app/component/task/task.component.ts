import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { RdvService } from '../../service/rdv/rdv.service';
import { RendezVous } from '../../model/rdv.model';
import { error } from 'jquery';
import { er } from '@fullcalendar/core/internal-common';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  loading = true;
  constructor(private taskService: RdvService){};
  ngOnInit(): void {
      this.taskService.getTask().subscribe({
        next:(res)=>{
          this.todo = res.todo;
          this.done = res.done;
          this.loading = false;
        },
        error:(error)=>{
          console.error(error);
        }
      });
      
  }
  todo:RendezVous[] = [];

  done:RendezVous[] = [];
  
  drop(event: CdkDragDrop<RendezVous[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.taskService.doneRdv(event.item.data._id).subscribe({
        next: (res)=>{
          console.log('success');
        },
        error: (error)=>{
          console.error(error);
        }
      })
      
    }
  }

}
