import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [NgClass],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  activeItem: string = 'Dashboard'; // Stores the active menu item

  constructor(private router: Router) {}

  onItemClick(item: string): void {
    switch (item) {
      case 'Dashboard':
        this.router.navigate([{ outlets: { outlet2: ['industrial-hardware-user-dashboard-home'] } }]);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Products':
        this.router.navigate([{ outlets: { outlet2: ['industrial-hardware-user-dashboard-product'] } }]);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Categories':
        console.log('Navigating to Categories...');
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Orders':
        console.log('Navigating to Orders...');
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Billing':
        this.router.navigate([{ outlets: { outlet2: ['industrial-hardware-user-dashboard-billing'] } }]);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Sellers / Vendors':
        console.log('Navigating to Sellers / Vendors...');
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Customers':
        console.log('Navigating to Customers...');
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Reviews':
        console.log('Navigating to Reviews...');
        this.activeItem = item; // Set the clicked item as active
        break;
      default:
        console.log('Unknown menu item clicked.');
    }
  }
}
