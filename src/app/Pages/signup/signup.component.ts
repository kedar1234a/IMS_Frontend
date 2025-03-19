import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserDataService } from '../../Services/user-data.service';
import { userData } from '../../model/userData.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  userDetails: userData = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  };
  confirmPassword: string = '';
  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}
  onSignup() {
    if (
      this.userDetails.firstname &&
      this.userDetails.lastname &&
      this.userDetails.username &&
      this.userDetails.password &&
      this.confirmPassword
    ) {
      if (this.userDetails.password === this.confirmPassword) {
        this.userDataService.storeUserData(this.userDetails);
        console.log('Signup Successful', this.userDetails);
        alert('SuccessFully Signed Up');
        this.userDetails = {
          firstname: '',
          lastname: '',
          username: '',
          password: '',
        };
        this.confirmPassword = '';
        this.router.navigate(['/login']);
      } else {
        alert('Password Does Not Match');
      }
    }
  }
}
