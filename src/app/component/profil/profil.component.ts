import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../../service/employe/employe.service';
import { User } from '../../model/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ProfilModalComponent } from './profil-modal/profil-modal.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit{ 
    loading = false; 
    user:User = {
      id:'',
      nom: '',
      prenom: '',
      mail:'',
      role:0,
      etat:1
    }
      
    constructor(private empService : EmployeService,private dialog: MatDialog){}
    ngOnInit(): void {
        this.loadProfil();
    }

    loadProfil(){
      this.loading = true;
      this.empService.getProfil().subscribe(
        {
            next: (res)=>{
              this.user = res.user;
              this.loading = false;
            },
            error:(error)=>{
              console.error(error);
            }
        }
      )
    }

    editUserModal() {
      this.user.mdp = undefined;
      const dialogRef = this.dialog.open(ProfilModalComponent, {
        width: '400px',
        data: this.user
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('Modal fermé');
        this.loadProfil(); // Actualiser la liste des utilisateurs après la modification
      });
    }


    
}
