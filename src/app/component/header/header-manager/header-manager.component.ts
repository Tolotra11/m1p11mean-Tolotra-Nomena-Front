import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header-manager',
  templateUrl: './header-manager.component.html',
  styleUrl: './header-manager.component.css'
})
export class HeaderManagerComponent {
  constructor(private authService: AuthService){}
  logout(){
    this.authService.logout();
  }
}
