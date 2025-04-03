import { Component } from '@angular/core';
import { FeaturedCategoriesCardComponent } from '../../../Components/cards/featured-categories-card/featured-categories-card.component';
import { StoreNavComponent } from '../../../Components/navbar/store-nav/store-nav.component';

@Component({
  selector: 'app-store-home',
  standalone: true,
  imports: [StoreNavComponent,FeaturedCategoriesCardComponent],
  templateUrl: './store-home.component.html',
  styleUrl: './store-home.component.css'
})
export class StoreHomeComponent {

}
