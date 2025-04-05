import { Component, OnInit } from '@angular/core';
import { FeaturedCategoriesCardComponent } from '../../../Components/cards/featured-categories-card/featured-categories-card.component';
import { StoreNavComponent } from '../../../Components/navbar/store-nav/store-nav.component';
import { LandingFooterComponent } from '../../../Components/footer/landing-footer/landing-footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-store-home',
  standalone: true,
  imports: [StoreNavComponent,FeaturedCategoriesCardComponent,LandingFooterComponent,RouterOutlet],
  templateUrl: './store-home.component.html',
  styleUrl: './store-home.component.css'
})
export class StoreHomeComponent{

}
