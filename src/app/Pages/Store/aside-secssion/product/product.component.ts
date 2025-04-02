import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HttpEventType } from '@angular/common/http';
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
  uploadProgress: number = 0;

  constructor(private fb: FormBuilder, private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [''],
      name: [''],
      price: [''],
      category: ['']
    });

    this.loadProducts();
  }

  getImageUrl(imageName: string): string {
    return this.productService.getImageUrl(imageName);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  saveProduct(): void {
    const formData = new FormData();
    formData.append('id', this.productForm.get('id')?.value);
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('category', this.productForm.get('category')?.value);

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    this.productService.addProduct(formData).subscribe({
      next: (event) => {
        
          console.log('Product saved:', event.body);
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
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted');
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      }
    });
  }


}
