import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../service/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-add-modal.component.html',
  styleUrl: './user-add-modal.component.css'
})
export class UserAddModalComponent {
  newUser: User = {
    nom: '',
    prenom: '',
    mail: '',
    mdp: '',
    role: 20,
    etat: 10,
    id: '',
    confirmMdp:''
  };
  isLoading: boolean = false;
  error = '';
  constructor(
    public dialogRef: MatDialogRef<UserAddModalComponent>,
    private userService: UserService,
    private toastr: ToastrService // Injection du service ToastrService
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  saveUser(): void {
    this.isLoading = true;

    this.userService.createUser(this.newUser).subscribe(
      (response: User) => {
        this.isLoading = false;
        this.toastr.success('Utilisateur ajouté avec succès'); // Utilisation de ToastrService pour afficher le toast de succès
        this.dialogRef.close();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur : ', error);
        this.isLoading = false;
        this.error = error.error.message; // Utilisation de ToastrService pour afficher le toast d'erreur
      }
    );
  }
}
