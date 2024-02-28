import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header-employe',
  templateUrl: './header-employe.component.html',
  styleUrl: './header-employe.component.css'
})
export class HeaderEmployeComponent {
    constructor(private authService: AuthService ){};
    
    logout(){
      this.authService.logout();
    }
}
