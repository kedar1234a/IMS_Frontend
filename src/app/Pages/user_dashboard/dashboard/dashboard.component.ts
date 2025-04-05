import { Component } from '@angular/core';
import { DbasideComponent } from '../dbaside/dbaside.component';
import { DbnavbarComponent } from "../dbnavbar/dbnavbar.component";
import { HomeComponent } from '../dbsections/home/home.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DbasideComponent, DbasideComponent, DbnavbarComponent,HomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
