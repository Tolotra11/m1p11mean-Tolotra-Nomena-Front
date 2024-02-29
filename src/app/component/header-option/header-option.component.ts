import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header-option',
  templateUrl: './header-option.component.html',
  styleUrl: './header-option.component.css'
})
export class HeaderOptionComponent {
    constructor(private authService: AuthService){}
    getRole(){
      return this.authService.getRole();
    }
}
