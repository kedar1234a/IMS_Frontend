import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-store-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './store-nav.component.html',
  styleUrl: './store-nav.component.css'
})
export class StoreNavComponent {

}
