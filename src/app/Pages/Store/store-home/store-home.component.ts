import { Component } from '@angular/core';
import { StoreNavComponent } from '../../../Components/navbar/store-nav/store-nav.component';

@Component({
  selector: 'app-store-home',
  standalone: true,
  imports: [StoreNavComponent],
  templateUrl: './store-home.component.html',
  styleUrl: './store-home.component.css'
})
export class StoreHomeComponent {

}
