import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/productServices/product-service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AddToCartService } from '../../../Services/AddToCartService/add-to-cart-service.service';

@Component({
  selector: 'app-featured-categories-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-categories-card.component.html',
  styleUrl: './featured-categories-card.component.css',
})
export class FeaturedCategoriesCardComponent implements OnInit {
  products: any[] = [];
  expandedIndex: number | null = null;

  constructor(
    private productService: ProductService,
    private router: Router,
    private cartService: AddToCartService
  ) {}

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }
  
  loadFeaturedProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data.map((product) => ({
          ...product,
          expanded: false,
        }));
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }
  
  getImageUrl(productId: number): string {
    return this.productService.getImageUrl(productId);
  }
  
  toggleDescription(index:  number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
  
  items = {
    item: 'Oven',
    base_price: 4999,
    quantity: 1, // Usually at least 1 if you're adding to cart
    ImageURL: 'assets/oven.png'
  };
  
  addToCart(): void {
   
    
    const userConfirmed = confirm('✅ Item added to your cart.\n\nWould you like to view your cart now?');
    if (userConfirmed) {
      this.router.navigate(['/electronics-add-to-cart']);
    }
  }
  
  
}
