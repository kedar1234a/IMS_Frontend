import { Component } from '@angular/core';
import { ProductService } from '../../../../Services/productServices/product-service.service';
import { StoreNavComponent } from '../../../../Components/navbar/store-nav/store-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industrial-hardware-see-more',
  standalone: true,
  imports: [CommonModule, StoreNavComponent],
  templateUrl: './industrial-hardware-see-more.component.html',
  styleUrl: './industrial-hardware-see-more.component.css'
})
export class IndustrialHardwareSeeMoreComponent {
  products: any[] = []; // Store fetched products
    expandedIndex: number | null = null;
  
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
  
    toggleDescription(index: number) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    }
}
