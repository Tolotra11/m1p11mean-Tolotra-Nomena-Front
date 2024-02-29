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
      this.checkLogin();
      this.loginForm = this.fb.group({
        email: [this.getEmailDefaultValue(), [Validators.required, Validators.email]],
        password: [
          this.getPasswordDefaultValue(),
          [
            Validators.required,
          ]
        ]
      })
     
  }
  
  getEmailDefaultValue(){
    if(this.role === 20){
      return 'Rakotonirina@gmail.com';
    }
    else if(this.role == 10){
      return 'Rakotonirina123@gmail.com';
    }
    else{
      return 'admin@gmail.com';
    }
  }

  getPasswordDefaultValue() {
    if(this.role === 20){
      return '12345678';
    }
    else if(this.role == 10){
      return '12345678';
    }
    else{
      return '12345678';
    }
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
          this.authService.addAuthToken(res.token);
          this.authService.addRole(this.role+"");
          if(this.role == 30){
            this.router.navigate(['/manager/dashboard']);
          }
          else if(this.role == 10){
              this.push.requestPermission();
              this.router.navigate(['/client/list']);
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

  checkLogin(){
    if(this.authService.isLoggedIn()){
        const role = this.authService.getRole();
        if(this.role == 30){
          this.router.navigate(['/manager/dashboard']);
        }
        else if(this.role == 10){
            this.router.navigate(['/client/list']);
        }
        else{
          this.router.navigate(['/employe/rdv']);
        }
    }
  }
}
