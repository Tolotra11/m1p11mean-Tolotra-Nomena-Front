import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../model/user.model';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-user-delete-modal',
  templateUrl: './user-delete-modal.component.html',
  styleUrl: './user-delete-modal.component.css'
})
export class UserDeleteModalComponent {
  isLoading = false;
  constructor(
    public dialogRef: MatDialogRef<UserDeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User, // Injecter les données de l'utilisateur
    private userService: UserService
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  deleteUser(): void {
    this.isLoading = true;
    this.userService.deleteUser(this.user.id||'').subscribe(
      () => {
        console.log('Utilisateur supprimé avec succès');
        this.isLoading = false;
        this.dialogRef.close(); // Fermer la modal après la suppression réussie
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'utilisateur : ', error);
        this.isLoading = false;
        // Gérer les erreurs liées à la suppression de l'utilisateur
      }
    );
  }
}
