import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(private router:Router){}
  navigate(event:Event){
    const ac_option = (event.target as HTMLSelectElement).value;
    if(ac_option == 'logout'){
      this.router.navigate(['/'])
    }
  }
}
