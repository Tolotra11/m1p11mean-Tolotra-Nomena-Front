import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { RdvService } from '../../service/rdv/rdv.service';
import { RendezVous } from '../../model/rdv.model';
import { formatDateString, formatHeure } from '../../utils/utils';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  loading = true;
  formatterDate = formatDateString;
  formatterTime = formatHeure;
  constructor(private taskService: RdvService){};
  ngOnInit(): void {
      this.taskService.getTask().subscribe({
        next:(res)=>{
          this.todo = res.todo;
          this.done = res.done;
          this.commission = res.commission;
          this.loading = false;
        },
        error:(error)=>{
          console.error(error);
        }
      });
      
  }
  todo:RendezVous[] = [];

  done:RendezVous[] = [];

  commission = '';  
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
      this.getLocalCommission();
      if(event.item.data.etat == 10){
        this.taskService.rollBackRdv(event.item.data._id).subscribe({
          next: (res)=>{
            console.log(res.message);
          },
          error: (error)=>{
            console.error(error);
          }
        })
      }
      else{
        this.taskService.doneRdv(event.item.data._id).subscribe({
          next: (res)=>{
            console.log(res.message);
          },
          error: (error)=>{
            console.error(error);
          }
        })
      }
      
    }
  }

  getLocalCommission(){
    let newCom = 0;
    this.done.forEach(element => {
      newCom += (element.service.commission/100)*element.prix;
      
    });
    this.commission = newCom.toFixed(2);
  }

}
