import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserDataService } from '../../Services/user-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData = {
    username: '',
    password: '',
  };
  constructor(private UserDataMethod: UserDataService) {}

  onLogin() {
    const users = this.UserDataMethod.getUserData();
    const user = users.find(
      (u) =>
        u.username === this.loginData.username &&
        u.password === this.loginData.password
    );
    if (user) {
      console.log('Login Successful!!!');
      alert('Login Successful');
    } else {
      alert('Invalid Credentials!!!');
    }
    this.loginData.username = '';
    this.loginData.password = '';
  }
}
