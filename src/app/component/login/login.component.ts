import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { PushnotificationService } from '../../service/pushNotification/pushnotification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  @Input() role = 0;
  error : string|undefined;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  submitted : boolean = false;
  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router, private push: PushnotificationService) {
  }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
          ]
        ]
      })
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  login() {
    this.submitted = true;
    if(this.loginForm.invalid){
        return;
    }
    this.authService.login(this.loginForm.value,this.role).subscribe(
      {
        next:(res) => {
          // Handle successful login, e.g., store token in local storage
          console.log('Login successful:', res.token);
          this.authService.addAuthToken(res.token);
          this.authService.addRole(this.role+"");
          if(this.role == 30){
            this.router.navigate(['/manager/accueil']);
          }
          else if(this.role == 10){
              this.push.requestPermission();
          }
          else{
            this.router.navigate(['/employe/rdv']);
          }
        },
        error: (error) => {
          this.error = error.error.message;
          console.error('Login error:', error.error.message);
        }
      }
    );
  }
}
