import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService, AuthRequest } from '../../Services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false; // Added missing field
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    const authRequest: AuthRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.login(authRequest).subscribe({
      next: (token) => {
        console.log('Login successful:');
        localStorage.setItem('token', token); // Save token in localStorage
        this.router.navigate(['/dashboard']); // Navigate to dashboard page
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password.';
      }
    });
  }
}
