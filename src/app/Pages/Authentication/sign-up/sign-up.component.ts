import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../Services/AuthenticationService/authentication.service';
import { UserData } from '../../../model/User-Data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signupData: UserData = {
    full_name: '',
    email: '',
    store_type: '',
    password: '',
    role: 'USER'
  };

  confirm_password = '';
  showPassword = false;
  showConfirmPassword = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  OnSignUp() {
    // Check if all required fields are provided
    if (
      this.signupData.full_name &&
      this.signupData.email &&
      this.signupData.password &&
      this.signupData.store_type
    ) {
      // Check if passwords match
      if (this.signupData.password === this.confirm_password) {
        // Add a pending status to the signup data before sending it
        const signupRequest = {
          ...this.signupData,
          status: 'PENDING', // Setting default status as 'PENDING'
        };

        // Call the service
      this.authenticationService.register(this.signupData).subscribe({
        next: (response) => {
          alert(response.message);
          this.router.navigate(['/login']); // Navigate to login page

          // Reset form fields
          this.signupData = {
            full_name: '',
            email: '',
            store_type: '',
            password: '',
          };
          this.confirm_password = '';
        },
        error: (error) => {
          console.error('Error during signup:', error);
          alert(error.message);
        }
      });

    } else {
      alert('Passwords do not match');
    }
  } else {
    alert('Please fill all the required fields.');
  }
}


  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Toggle confirm password visibility
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
