import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../service/user/user.service';
import { UserAddModalComponent } from './user-add-modal/user-add-modal.component';
import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component';
import { UserDeleteModalComponent } from './user-delete-modal/user-delete-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  users: User[] = [];
  keyword: string = '';
  nom: string = '';
  prenom: string = '';
  mail: string = '';
  role: string = '';
  etat: string = '1';
  page: number = 0;
  limit: number = 10;
  isLoading: boolean = true;

  constructor(private dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(); // Chargez les utilisateurs au démarrage du composant
  }

  loadUsers() {
    this.isLoading = true;
    this.userService.getUsers(this.keyword, this.nom, this.prenom, this.mail, this.role, '1', this.page.toString(), this.limit.toString()).subscribe(
      (data: User[]) => {
        this.users = data; // Mettez à jour la liste des utilisateurs avec les données récupérées du service
        this.isLoading = false;
      },
      (error) => {
        console.log(error); // Gérez les erreurs de manière appropriée
        this.isLoading = false;
      }
    );
  }

  searchUsers() {
    this.page = 0;
    this.loadUsers();
  }

  nextPage() {
    this.page++;
    this.loadUsers();
  }

  prevPage() {
    if (this.page > 0) {
      this.page--;
      this.loadUsers();
    }
  }

  editUserModal(user: User) {
    user.mdp = undefined;
    const dialogRef = this.dialog.open(UserEditModalComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fermé');
      this.loadUsers(); // Actualiser la liste des utilisateurs après la modification
    });
  }


  deleteUser(user: User) {
    const dialogRef = this.dialog.open(UserDeleteModalComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {  
        this.loadUsers(); 
    },
    (error)=>{
      console.error(error);
    });
  }

  addUser() {
    const dialogRef = this.dialog.open(UserAddModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal fermé');
      // Si vous souhaitez actualiser la liste des utilisateurs après l'ajout, appelez la méthode loadUsers()
      this.loadUsers();
    });
  }

  showProfile(userId: string) {
    this.userService.getUserById(userId).subscribe(
      (user: User) => {
        // Implémentez la logique pour afficher le profil de l'utilisateur
        console.log('Profil de l\'utilisateur : ', user);
      },
      (error) => {
        console.error('Erreur lors de la récupération du profil de l\'utilisateur : ', error);
      }
    );
  }

}
