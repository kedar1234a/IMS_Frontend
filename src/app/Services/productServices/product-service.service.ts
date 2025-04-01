import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  // Add Product
  addProduct(product: Product): Observable<any> {  // Expecting JSON, not plain text
    return this.http.post<any>('http://localhost:8080/api/addProduct', product);
  }
  
  

  // Get All Products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/getProduct`);
  }

  // Update Product
  updateProduct(product: Product): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/updateProduct`, product);
  }

  // Delete Product
  deleteProduct(product_id: any) {
    return this.http.delete(`${this.apiUrl}/deleteProduct/${product_id}`, { responseType: 'text' });
  }
  
}
