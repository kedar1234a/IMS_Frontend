import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AsideComponent } from '../../../Components/aside/aside.component';
import { StoreNavComponent } from "../../../Components/navbar/store-nav/store-nav.component";
import { DashboardNavComponent } from '../../../Components/navbar/dashboard-nav/dashboard-nav.component';





@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsideComponent,DashboardNavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    
      this.router.navigate([{ outlets: { outlet2: ['dashboardHome'] } }]);
    
  }

}
