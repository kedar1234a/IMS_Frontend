import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-nav.component.html',
  styleUrl: './landing-nav.component.css',
})
export class LandingNavComponent {
  constructor(private router: Router) {}
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
}
