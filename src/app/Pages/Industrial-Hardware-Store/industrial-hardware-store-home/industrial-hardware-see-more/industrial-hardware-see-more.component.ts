import { Component } from '@angular/core';
import { ProductService } from '../../../../Services/productServices/product-service.service';
import { CommonModule } from '@angular/common';
import { IndsutrialHardwareNavComponent } from '../../../../Components/navbar/store-navbars/indsutrial-hardware-nav/indsutrial-hardware-nav.component';

@Component({
  selector: 'app-industrial-hardware-see-more',
  standalone: true,
  imports: [CommonModule, IndsutrialHardwareNavComponent],
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
