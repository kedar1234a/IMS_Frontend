import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './admin-signup.component.html',
  styleUrl: './admin-signup.component.css'
})
export class AdminSignupComponent {
  constructor(private router:Router){}
  signup(){
    this.router.navigate(['/adminlogin'])
  }
}
