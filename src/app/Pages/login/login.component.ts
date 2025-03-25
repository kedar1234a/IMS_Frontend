import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SignupService } from '../../Services/signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private sigup_service:SignupService,private router:Router){}
  email = '';
  password = '';
  store_type :string = '';
  onLogin(){
    const user = this.sigup_service.getUserByEmail(this.email);
    if(this.sigup_service.validateUser(this.email,this.password)){
      this.store_type = user?.store_type || '';
      alert("Login Successfully");
      if(this.store_type == "grocery"){
        this.router.navigate(['/grocery_dashboard']);
      }
      else if(this.store_type == "electronics"){
        this.router.navigate(['/electronics_dashboard']);
      }
      else{
        this.router.navigate(['/hardware_dashboard']);
      }
    }
    else{
      alert("Invalid Credentials");
    }
  }

}
