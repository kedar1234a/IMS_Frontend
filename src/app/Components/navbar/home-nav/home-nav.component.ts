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
    const selectedStore = (event.target as HTMLSelectElement).value;
    
    if (selectedStore == 'grocery'|| selectedStore == 'hardware'||selectedStore == 'electronics' || selectedStore == 'signup') {
      this.router.navigate(['/signup']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
