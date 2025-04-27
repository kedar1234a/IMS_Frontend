import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../Services/AuthenticationService/authentication.service';

@Component({
  selector: 'app-landing-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-nav.component.html',
  styleUrl: './landing-nav.component.css',
})
export class LandingNavComponent {
  constructor(private router: Router, private authenticationService:AuthenticationService) {}
  navigate(event: Event) {
    const selectedStore = (event.target as HTMLSelectElement).value;

    if (
      selectedStore == 'grocery' ||
      selectedStore == 'hardware' ||
      selectedStore == 'electronics' ||
      selectedStore == 'signup'
    ) {
      this.router.navigate(['/signup']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logOut(){
   
    this.authenticationService.logout().subscribe(response => {
      console.log(response);
      // Optionally, clear token from localStorage or sessionStorage
      localStorage.removeItem('token');
      // Redirect to login page
      this.router.navigate(['/landing']);
    });
    
  }
}
