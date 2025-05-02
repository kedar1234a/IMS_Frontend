import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../../../Services/productServices/product-service.service';
import { isNullOrUndef } from 'chart.js/dist/helpers/helpers.core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  product = {
    name: '',
    price: '',
    category: '',
    quantity: '',
    description: '',
    gstType: '',
    gstRate: ''
  };
  imageFile: File | null = null;



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


  
  productsArray: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductService) {}

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  ngOnInit(): void {

    this.loadProducts();
      
  }

  saveProduct() {
    const token = localStorage.getItem('token'); // Make sure you store the JWT token
    console.log('Get token to save product', token);
    if (!token) {
      alert('User not authenticated');
      console.log('token not authenticated');

      return;
    }

    if (!this.imageFile) {
      alert('Please select an image file.');
      return;
    }

    this.productService.addProduct(this.product, this.imageFile, token).subscribe({
      next: (res) => {
        console.log('Product added:', res);
        alert('Product added successfully!');
        this.loadProducts();
        this.resetFormState();
      },
      error: (err) => {
        console.error('Error adding product:', err);
        alert('Error adding product.');
      }
    });
  }

  loadProducts(){

    this.productService.getProducts().subscribe({
      next: (resPro)=>{
        console.log(resPro);
        this.filteredProducts = resPro;
      }
    });
  }

  editProduct(product:any){}

  updateProduct(){}

  deleteProduct(byId:number){}

  getImageUrl(product_id: number): string {
    return this.productService.getImageUrl(product_id);
  }
 
  resetFormState() {
    this.product = {
      name: '',
      price: '',
      category: '',
      quantity: '',
      description: '',
      gstType: '',
      gstRate: ''
    };
    this.imageFile = null;
  
    // Clear file input
    if (this.fileInputRef?.nativeElement) {
      this.fileInputRef.nativeElement.value = '';
    }
  }
  
}
