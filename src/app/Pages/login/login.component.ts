import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router:Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/dashboard']); // Redirect to Dashboard
      } else {
        this.message = 'Invalid credentials!';
      }
    });
  }

  
}
