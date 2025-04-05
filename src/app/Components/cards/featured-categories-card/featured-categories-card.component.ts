import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/productServices/product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-categories-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-categories-card.component.html',
  styleUrl: './featured-categories-card.component.css'
})
export class FeaturedCategoriesCardComponent implements OnInit {
  products: any[] = []; // Store fetched products
  expandedIndex: number | null = null;


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadFeaturedProducts(); // Call function to fetch products
  }

  loadFeaturedProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.map(product => ({
          ...product,
          expanded: false // Add expanded property dynamically
        }));
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  getImageUrl(productId: number): string {
    return this.productService.getImageUrl(productId); // Get image URL
  }

  toggleDescription(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
