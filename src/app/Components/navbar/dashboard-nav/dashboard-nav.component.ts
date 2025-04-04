import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.css',
})
export class DashboardNavComponent {
  storedUser = localStorage.getItem('name');
  uname: any = this.storedUser;
  logout() {
    if (localStorage.getItem('username')) {
      localStorage.removeItem('username');
    }
  }
}
