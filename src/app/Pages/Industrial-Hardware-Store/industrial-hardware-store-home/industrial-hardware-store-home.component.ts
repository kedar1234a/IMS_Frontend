import { Component } from '@angular/core';
import { ProductService } from '../../../Services/productServices/product-service.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingFooterComponent } from '../../../Components/footer/landing-footer/landing-footer.component';
import { FeaturedCategoriesCardComponent } from '../../../Components/cards/featured-categories-card/featured-categories-card.component';
import { IndsutrialHardwareNavComponent } from '../../../Components/navbar/store-navbars/indsutrial-hardware-nav/indsutrial-hardware-nav.component';

@Component({
  selector: 'app-industrial-hardware-store-home',
  standalone: true,
  imports: [
    IndsutrialHardwareNavComponent,
    FeaturedCategoriesCardComponent,
    LandingFooterComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './industrial-hardware-store-home.component.html',
  styleUrl: './industrial-hardware-store-home.component.css',
})
export class IndustrialHardwareStoreHomeComponent {
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
