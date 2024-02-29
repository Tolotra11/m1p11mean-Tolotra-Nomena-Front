import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-manager',
  templateUrl: './header-manager.component.html',
  styleUrl: './header-manager.component.css'
})
export class HeaderManagerComponent {
  private forceRerender: boolean = false;
  constructor(private authService: AuthService,  private router: Router){}
  logout(){
    this.authService.logout();
  }

}
