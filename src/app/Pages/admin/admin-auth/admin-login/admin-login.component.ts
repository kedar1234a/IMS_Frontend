import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  constructor(private router:Router){}
  username = '';
  password = '';
  OnAdminLogin(){
    const uname = 'Admin';
    const password = 'admin';
    if(uname === this.username && password === this.password){
      alert("Admin Login Verfied");
      this.router.navigate(['/adminDashboard'])
    }
    else{
      alert("Login Failed");
    }
  }
}
