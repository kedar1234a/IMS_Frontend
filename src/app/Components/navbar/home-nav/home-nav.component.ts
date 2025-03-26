import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-nav',
  standalone: true,
  imports: [],
  templateUrl: './home-nav.component.html',
  styleUrl: './home-nav.component.css'
})
export class HomeNavComponent {
  constructor(private router: Router) {}

  navigate(event: Event) {
    const selected_option = (event.target as HTMLSelectElement).value;
    
    if (selected_option == 'grocery'|| selected_option == 'hardware'||selected_option == 'electronics' || selected_option == 'signup') {
      this.router.navigate(['/signup']);
    }
    else if(selected_option == 'login'){
      this.router.navigate(['/login']);
    }
    else if(selected_option == 'adminlogin'){
      this.router.navigate(['/adminlogin']);
    }
    else{
      this.router.navigate(['/adminsignup']);
    }
  }
}
