import { Component } from '@angular/core';
import { HomeNavComponent } from '../../Components/navbar/home-nav/home-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent,HomeNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
