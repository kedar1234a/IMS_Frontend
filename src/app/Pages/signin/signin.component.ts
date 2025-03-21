import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username: string = '';
  email:string ='';
  password: string = '';
  message: string = '';

  constructor(private authSignin: AuthService, private router: Router) {}

  onSignUp() {
    this.authSignin.register(this.username, this.email,this.password).subscribe(response => {
      if (response) {
        this.message = 'Registration successful! You can now log in.';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      } else {
        this.message = 'Registration failed. Try again!';
      }
    });
  }
}
