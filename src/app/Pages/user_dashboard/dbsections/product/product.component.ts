import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  
  @ViewChild('fileInput') fileInput!: ElementRef; // Reference to the file input element

  categories: string[] = ['Electronics', 'Clothing', 'Furniture', 'Books', 'Toys'];

  productForm!: FormGroup;
  productsArray: any[] = [];
  selectedFile: File | null = null;
  uploadProgress: number = 0;
  isEditing = false;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [''],
      name: [''],
      price: [''],
      category: [''],
      stock:[''],
      description:['']
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
    formData.append('id', this.productForm.get('id')?.value || '');
    formData.append('name', this.productForm.get('name')?.value || '');
    formData.append('price', this.productForm.get('price')?.value || '');
    formData.append('category', this.productForm.get('category')?.value || '');
    formData.append('stock',this.productForm.get('stock')?.value || '');
    formData.append('description',this.productForm.get('description')?.value || '');

    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    if (this.isEditing) {
      const productId = this.productForm.get('id')?.value;
      this.productService.updateProduct(productId, formData).subscribe({
        next: () => {
          this.loadProducts();
          this.resetForm();

        },
        error: (err) => console.error('Error updating product:', err)
      });
    } else {
      this.productService.addProduct(formData).subscribe({
        next: (event) => {
          console.log('Product saved:', event.body);
          this.loadProducts();
          this.resetForm();

        },
        error: (err) => console.error('Error saving product:', err)
      });
    }
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.productsArray = data;
      },
      error: (err) => console.error('Error loading products:', err)
    });
  }

  editProduct(product: any): void {
    this.productForm.patchValue(product);
    this.isEditing = true;
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        console.log('Product deleted');
        this.loadProducts();
      },
      error: (err) => console.error('Error deleting product:', err)
    });
  }

  resetForm(): void {
    this.productForm.reset({
      id: '',
      name: '',
      price: '',
      category: ''
    });
    this.selectedFile = null;

    // Clear the file input field
    this.fileInput.nativeElement.value = '';



    this.isEditing = false;
  }


}
