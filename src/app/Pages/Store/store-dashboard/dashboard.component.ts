import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AsideComponent } from '../../../Components/aside/aside.component';
import { NavbarComponent } from '../../../Components/navbar/store-nav/navbar.component';





@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsideComponent,NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    
      this.router.navigate([{ outlets: { outlet2: ['home'] } }]);
    
  }

}
