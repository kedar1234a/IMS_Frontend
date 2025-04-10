import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../Services/AuthenticationService/authentication.service';
import { authData } from '../../../model/auth-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signupData: authData = {
    full_name: '',
    email: '',
    store_type: '',
    password: '',
  };

  confirm_password = '';

  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  OnSignUp() {
    if (
      this.signupData.full_name &&
      this.signupData.email &&
      this.signupData.password &&
      this.signupData.store_type
    ) {
      if (this.signupData.password === this.confirm_password) {
        this.authenticationService.storeSignupDetails(this.signupData).subscribe(
          (response) => {
            alert('SignUp Successful');
            this.router.navigate(['/login']);

            // Reset form fields
            this.signupData = {
              full_name: '',
              email: '',
              store_type: '',
              password: '',
            };
            this.confirm_password = '';
          },
          (error) => {
            console.error('Error during signup:', error);
            alert('Signup failed. Please try again.');
          }
        );
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Invalid Credentials');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
