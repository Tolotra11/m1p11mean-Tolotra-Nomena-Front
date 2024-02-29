import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../model/user.model';
import { UserService } from '../../../service/user/user.service';
import { ProfileUpdateService } from '../../../service/profile-update.service';
import { EmployeService } from '../../../service/employe/employe.service';

@Component({
  selector: 'app-profil-modal',
  templateUrl: './profil-modal.component.html',
  styleUrl: './profil-modal.component.css'
})
export class ProfilModalComponent {
  isLoading = false;
  editedUser: { id?: string | undefined; nom?: string | undefined; prenom?: string | undefined; mail?: string | undefined; mdp?: string | undefined; confirmMdp?: string | undefined; role?: number | undefined; etat?: number | undefined; };
  constructor(
    public dialogRef: MatDialogRef<ProfilModalComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User, // Injecter les données de l'utilisateur
    private employeService: EmployeService,
    private profileUpdateService: ProfileUpdateService
  ) {
    this.editedUser = { ...user }; // Copier les données de l'utilisateur dans editedUser
  }

  onClose(): void {
    this.dialogRef.close();
  }

  updateUser(): void {
    this.isLoading = true;
    this.employeService.updateUserM(this.user.id||'', this.editedUser).subscribe(
      (response: User) => {
        console.log('Utilisateur modifié avec succès : ', response);
        this.isLoading = false;
        this.profileUpdateService.announceProfileUpdate(); // Annoncez la mise à jour du profil
        this.dialogRef.close(); // Fermer le modal après la modification réussie

      },
      (error) => {
        this.isLoading = false;
        console.error('Erreur lors de la modification de l\'utilisateur : ', error);
        // Vous pouvez gérer ici les erreurs liées à la modification de l'utilisateur
      }
    );
  }
}
