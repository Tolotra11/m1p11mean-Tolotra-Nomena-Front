import { Component } from '@angular/core';
import { User } from '../../model/user.model';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../service/user/user.service';
import { ToastrService } from 'ngx-toastr';
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
    confirmMdp:'',
    role: 0,
    etat: 0,
    id: ''
  };
  isLoading: boolean = false;

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
        console.log('Utilisateur ajouté avec succès : ', response);
        this.isLoading = false;
        this.toastr.success('Utilisateur ajouté avec succès'); // Utilisation de ToastrService pour afficher le toast de succès
        this.dialogRef.close();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur : ', error);
        this.isLoading = false;
        this.toastr.error('Erreur lors de l\'ajout de l\'utilisateur'); // Utilisation de ToastrService pour afficher le toast d'erreur
      }
    );
  }
}
