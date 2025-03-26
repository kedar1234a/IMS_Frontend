import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignupService } from '../../Services/signup.service';
import { signup_data } from '../../model/signup-data';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signupData: signup_data = {
    full_name: '',
    email: '',
    store_type: '',
    role: '',
    password: '',
  };
  confirm_password = '';

  constructor(private signup_service: SignupService, private router: Router) {}

  OnSignUp() {
    if (
      this.signupData.full_name &&
      this.signupData.email &&
      this.signupData.password &&
      this.signupData.role &&
      this.signupData.store_type
    ) {
      if (this.signupData.password === this.confirm_password) {
        // Call the signup service to send data to backend
        this.signup_service.storeSignupDetails(this.signupData).subscribe(
          (response) => {
            alert('SignUp Successful');
            this.router.navigate(['/login']); // Redirect to login page

            // Reset form fields after successful signup
            this.signupData = {
              full_name: '',
              email: '',
              store_type: '',
              role: '',
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
}
