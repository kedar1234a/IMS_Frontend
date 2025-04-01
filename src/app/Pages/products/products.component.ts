import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../Services/productServices/product-service.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { product_name: '', product_price: 0 };
  isEditing: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe((response:any) => {
      alert(response.message);
      this.loadProducts();
      this.newProduct = { product_name: '', product_price:0};
    });
  }

  editProduct(product: Product) {
    this.newProduct = { ...product };
    this.isEditing = true;
  }

  updateProduct() {
    this.productService.updateProduct(this.newProduct).subscribe((message) => {
      alert(message);
      this.loadProducts();
      this.isEditing = false;
      this.newProduct = { product_name: '', product_price: 0 };
    });
  }
  deleteProduct(product_id:any): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(product_id).subscribe({
        next: (message: string) => {
          alert(message);  // Shows "Product Deleted Successfully !!" or error message
          this.loadProducts(); // Reloads product list after deletion
        },
        error: (err) => {
          alert('Failed to delete product. Check console for details.');
          console.error(err);
        }
      });
    }
  }
}