import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../../Services/productServices/product-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories: string[] = ['Electronics', 'Clothing', 'Furniture', 'Books', 'Toys'];

  productForm!: FormGroup;
  productsArray: any[] = [];
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      product_name: [''],
      product_price: [''],
      product_category: [''],
      product_available_stock_quantity: [''],
      product_description: ['']
    });

    this.loadProducts();
  }

  getImageUrl(imageName: string): string {
    return this.productService.getImageUrl(imageName);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  saveProduct(): void {
    if (!this.selectedFile) {
      alert('Please select an image!');
      return;
    }

    const productData = {
      product_name: this.productForm.get('product_name')?.value,
      product_price: this.productForm.get('product_price')?.value,
      product_category: this.productForm.get('product_category')?.value,
      product_available_stock_quantity: this.productForm.get('product_available_stock_quantity')?.value,
      product_description: this.productForm.get('product_description')?.value
    };

    this.productService.addProduct(productData, this.selectedFile).subscribe({
      next: (response) => {
        console.log('Product saved:', response);
        this.loadProducts();
        this.productForm.reset();
        this.selectedFile = null;
      },
      error: (err) => {
        console.error('Error saving product:', err);
      }
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.productsArray = data;
      },
      error: (err) => {
        console.error('Error loading products:', err);
      }
    });
  }

  editProduct(product: any): void {
    this.productForm.patchValue(product);
  }

  deleteProduct(id: number): void {
    if (!confirm('Are you sure you want to delete this product?')) return;
  
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted');
  
        // ✅ Remove deleted product from the array instantly
        this.productsArray = this.productsArray.filter(product => product.id !== id);
      },
      error: (err) => {
        console.error('Error deleting product:', err);
        alert('Failed to delete the product. Please try again.');
      }
    });
  }
  
}
