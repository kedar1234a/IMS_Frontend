import { Component, OnInit } from '@angular/core';
import { FeaturedCategoriesCardComponent } from '../../../Components/cards/featured-categories-card/featured-categories-card.component';
import { StoreNavComponent } from '../../../Components/navbar/store-nav/store-nav.component';
import { LandingFooterComponent } from '../../../Components/footer/landing-footer/landing-footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../Services/productServices/product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-home',
  standalone: true,
  imports: [
    StoreNavComponent,
    FeaturedCategoriesCardComponent,
    LandingFooterComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './store-home.component.html',
  styleUrl: './store-home.component.css',
})
export class StoreHomeComponent implements OnInit {
  products: any[] = []; // Store fetched products

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.loadFeaturedProducts(); // Call function to fetch products
  }

  loadFeaturedProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.map((product) => ({
          ...product,
          expanded: false, // Add expanded property dynamically
        }));
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  getImageUrl(productId: number): string {
    return this.productService.getImageUrl(productId); // Get image URL
  }
}
