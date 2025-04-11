import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../Services/AuthenticationService/authentication.service';
import { FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fixed the typo
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.authenticationService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Response from backend:', response);
        alert('Login Successfully');
        const store_type = response.store_type;

        const storeRoutes: { [key: string]: string } = {
          electronics: '/electronics-store-home',
          grocery: '/grocery-store-home',
          'industrial hardware': '/industrial-hardware-store-home',
        };

        const route = storeRoutes[store_type];

        if (route) {
          this.router.navigate([route]);
        } else {
          alert('Store Does Not Exist');
        }

        // this.router.navigate(['/electronics-store-home']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password. Try again.');
      },
    });
  }
}
