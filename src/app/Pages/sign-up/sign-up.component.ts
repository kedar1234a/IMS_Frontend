// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { SignupService } from '../../Services/signup.service';
// import { signup_data } from '../../model/signup-data';

// @Component({
//   selector: 'app-sign-up',
//   standalone: true,
//   imports: [FormsModule,RouterLink],
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css'], 
// })
// export class SignUpComponent {
//   users: any[] = [];


//   signupData: signup_data = {
//     full_name: '',
//     email: '',
//     store_type: '',
//     role: '',
//     password: '',
//   };
//   confirm_password = '';

//   constructor(private signup_service: SignupService, private router: Router,private http: HttpClient) {
//     this.http.get<any[]>('http://localhost:8080/api/register')
//     .subscribe(data => {
//       this.users = data;
//     });
//   }

//   OnSignUp() {
//     if (
//       this.signupData.full_name &&
//       this.signupData.email &&
//       this.signupData.password &&
//       this.signupData.role &&
//       this.signupData.store_type
//     ) {
//       if (this.signupData.password === this.confirm_password) {
//         this.signup_service.storeSignupDetails(this.signupData);
//         alert('SignUp Successful');

//         // Redirect to login page after signup
//         this.router.navigate(['/login']);

//         // Reset form
//         this.signupData = {
//           full_name: '',
//           email: '',
//           store_type: '',
//           role: '',
//           password: '',
//         };
//         this.confirm_password = ''; // Clear confirm password
//       } else {
//         alert('Password Does Not Match');
//       }
//     } else {
//       alert('Invalid Credentials');
//     }
//   }
// }

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
  users: any[] = [];

  signupData: signup_data = {
    full_name: '',
    email: '',
    store_type: '',
    role: '',
    password: '',
  };
  confirm_password = '';

  constructor(private signup_service: SignupService, private router: Router) {}

  ngOnInit() {
    // Fetch users from API on component load
    this.signup_service.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  OnSignUp() {
    if (
      this.signupData.full_name &&
      this.signupData.email &&
      this.signupData.password &&
      this.signupData.role &&
      this.signupData.store_type
    ) {
      if (this.signupData.password === this.confirm_password) {
        this.signup_service.storeSignupDetails(this.signupData).subscribe(
          (response) => {
            alert('SignUp Successful');
            this.router.navigate(['/login']); // Redirect to login page
            this.resetForm(); // Reset the form
          },
          (error) => {
            alert('Error during signup: ' + error.message);
          }
        );
      } else {
        alert('Password Does Not Match');
      }
    } else {
      alert('Invalid Credentials');
    }
  }

  resetForm() {
    this.signupData = {
      full_name: '',
      email: '',
      store_type: '',
      role: '',
      password: '',
    };
    this.confirm_password = '';
  }
}
