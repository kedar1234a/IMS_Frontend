import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dbaside',
  standalone: true,
  imports: [NgClass],
  templateUrl: './dbaside.component.html',
  styleUrl: './dbaside.component.css'
})
export class DbasideComponent implements OnInit{

  activeItem: string = ''; // Stores the active menu item
  constructor(private router: Router) {}

    ngOnInit(): void {
        this.activeItem='Home';
       
        
    }

  onItemClick(item: string): void {
    switch (item) {
        case 'Home':
            this.router.navigate([{ outlets: { outlet2: ['home'] } }]);
          this.activeItem = item; // Set the clicked item as active
            break;
        case 'Products':
            this.router.navigate([{ outlets: { outlet2: ['product'] } }]);
          this.activeItem = item; // Set the clicked item as active
            break;
        case 'Categories':
            console.log("Navigating to Categories...");
            this.activeItem = item; // Set the clicked item as active
            break;
        case 'Orders':
            console.log("Navigating to Orders...");
            this.activeItem = item; // Set the clicked item as active
            break;
        case 'Billing': 
            console.log("Navigating to Billing...");
            this.activeItem = item; // Set the clicked item as active
            break;
        case 'Sellers / Vendors':
            console.log("Navigating to Sellers / Vendors...");
            this.activeItem = item; // Set the clicked item as active
            break;
        case 'Customers':
            console.log("Navigating to Customers...");
            this.activeItem = item; // Set the clicked item as active
            break;
        case 'Reviews':
            console.log("Navigating to Reviews...");
            this.activeItem = item; // Set the clicked item as active
            break;
        default:
            console.log("Unknown menu item clicked.");
    }
}

}
