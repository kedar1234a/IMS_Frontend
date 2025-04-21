import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/productServices/product-service.service';
import { CommonModule } from '@angular/common';
import { Router} from '@angular/router';
import { AddToCartService ,CartItem} from '../../../Services/AddToCartService/add-to-cart-service.service';
@Component({
  selector: 'app-featured-categories-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-categories-card.component.html',
  styleUrl: './featured-categories-card.component.css',
})
export class FeaturedCategoriesCardComponent implements OnInit {
  products: any[] = [];
  expandedIndex: number | null = null;

  constructor(
    private productService: ProductService,
    private router: Router,private cartService: AddToCartService
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
  
  addToCart(name: string, price: number): void {
    this.cartService.addToCart({
      id: Date.now(), // generate unique id
      name,
      price,
      quantity:1
    });
    
  }

  selectedProductIds: Set<number> = new Set<number>();

  toggleProductSelection(product: any): void {
    if (this.selectedProductIds.has(product.product_id)) {
      this.selectedProductIds.delete(product.product_id);
     
    } else {
      this.selectedProductIds.add(product.product_id);
      this.addToCart(product.product_name, product.product_price);
    }
  }
  

  

isProductSelected(productId: number): boolean {
  return this.selectedProductIds.has(productId);
}

  
}
