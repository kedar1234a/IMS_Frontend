import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../../../Services/productServices/product-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  categories: string[] = [
    'Smartphone',
    'Laptop & PC',
    'Refrigerator',
    'Washing Machine',
    'AC',
  ];

  CGST = 'CGST';
  SGST = 'SGST';
  IGST = 'IGST';
  UTGST = 'UTGST';

  productForm!: FormGroup;
  productsArray: any[] = [];
  filteredProducts: any[] = [];
  selectedFile: File | null = null;
  searchTerm: string = '';
  selectedSortOption: string = '';

  token: string | null = null;
  editingProductId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    if (!this.token) {
      console.error('Token is missing. User may not be authenticated.');
    }

    this.productForm = this.fb.group({
      product_name: ['', Validators.required],
      product_price: ['', [Validators.required, Validators.min(0)]],
      product_category: ['', Validators.required],
      product_available_stock_quantity: ['', [Validators.required, Validators.min(0)]],
      product_description: ['', Validators.required],
      product_gstType: ['', Validators.required],
      product_gstRate: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    });

    this.loadProducts();
  }

  getImageUrl(product_id: number): string {
    return this.productService.getImageUrl(product_id);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  saveProduct(): void {
    if (!this.selectedFile) {
      alert('Please select an image!');
      return;
    }

    if (!this.token) {
      console.error('Token is missing. Cannot proceed with saving product.');
      return;
    }

    const productData = {
      name: this.productForm.get('product_name')?.value,
      price: Number(this.productForm.get('product_price')?.value),
      category: this.productForm.get('product_category')?.value,
      quantity: Number(this.productForm.get('product_available_stock_quantity')?.value),
      description: this.productForm.get('product_description')?.value,
      gstType: this.productForm.get('product_gstType')?.value,
      gstRate: Number(this.productForm.get('product_gstRate')?.value),
      image: this.selectedFile
    };

    this.productService.addProduct(productData, this.token).subscribe({
      next: (response) => {
        alert(response.message || 'Product saved successfully!');
        this.loadProducts();
        this.productForm.reset();
        this.selectedFile = null;
      },
      error: (err) => {
        console.error('Error saving product:', err);
        alert('Failed to save product');
      },
    });
  }

  loadProducts(): void {
 

    this.productService.getProductsByUser().subscribe({
      next: (data) => {
        this.productsArray = data.map(p => ({
          ...p,
          imageUrl: this.productService.getImageUrl(p.product_id),
        }));
        this.filteredProducts = [...this.productsArray];
      },
      error: (err) => {
        console.error('Error loading products:', err);
      },
    });
  }

  editProduct(product: any): void {
    this.editingProductId = product.product_id;
    this.productForm.patchValue(product);
    this.selectedFile = null;
  }

  updateProduct(): void {
    if (!this.editingProductId) {
      alert('No product selected for update.');
      return;
    }

    const updatedProduct = {
      product_id: this.editingProductId,
      product_name: this.productForm.get('product_name')?.value,
      product_price: this.productForm.get('product_price')?.value,
      product_category: this.productForm.get('product_category')?.value,
      product_available_stock_quantity: this.productForm.get('product_available_stock_quantity')?.value,
      product_description: this.productForm.get('product_description')?.value,
      product_gstType: this.productForm.get('product_gstType')?.value,
      product_gstRate: this.productForm.get('product_gstRate')?.value,
    };

    this.productService.updateProduct(updatedProduct, this.selectedFile || undefined).subscribe({
      next: (res) => {
        alert('Product updated successfully!');
        this.loadProducts();
        this.productForm.reset();
        this.editingProductId = null;
        this.selectedFile = null;
      },
      error: (err) => {
        console.error('Error updating product:', err);
        alert('Failed to update product: ' + err.message);
      },
    });
  }

  deleteProduct(id: number): void {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.deleteProduct(id).subscribe({
      next: () => {
        alert('Product deleted successfully');
        this.productsArray = this.productsArray.filter(product => product.product_id !== id);
        this.filteredProducts = this.filteredProducts.filter(product => product.product_id !== id);
        this.productForm.reset();
        this.selectedFile = null;
      },
      error: (err) => {
        console.error('Error deleting product:', err);
        alert('Failed to delete the product. Please try again.');
      },
    });
  }

  onSearchChange(): void {
    const term = this.searchTerm.toLowerCase().trim();

    if (term === '') {
      this.filteredProducts = this.productsArray;
      return;
    }

    this.filteredProducts = this.productsArray.filter(
      (product) =>
        product.product_id.toString().includes(term) ||
        product.product_name.toLowerCase().includes(term) ||
        product.product_price.toString().includes(term)
    );
  }

  sortProducts(): void {
    switch (this.selectedSortOption) {
      case 'id':
        this.filteredProducts.sort((a, b) => a.product_id - b.product_id);
        break;
      case 'name':
        this.filteredProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
        break;
      case 'price':
        this.filteredProducts.sort((a, b) => a.product_price - b.product_price);
        break;
      case 'stock':
        this.filteredProducts.sort(
          (a, b) => a.product_available_stock_quantity - b.product_available_stock_quantity
        );
        break;
      default:
        this.filteredProducts = [...this.productsArray];
    }
  }
}
