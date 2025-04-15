import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/productServices/product-service.service';
import { FeaturedCategoriesCardComponent } from '../../../Components/cards/featured-categories-card/featured-categories-card.component';
import { LandingFooterComponent } from '../../../Components/footer/landing-footer/landing-footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GroceryNavComponent } from '../../../Components/navbar/store-navbars/grocery-nav/grocery-nav.component';

@Component({
  selector: 'app-grocery-store-home',
  standalone: true,
  imports: [
    GroceryNavComponent,
    FeaturedCategoriesCardComponent,
    LandingFooterComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './grocery-store-home.component.html',
  styleUrl: './grocery-store-home.component.css'
})
export class GroceryStoreHomeComponent implements OnInit {
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
