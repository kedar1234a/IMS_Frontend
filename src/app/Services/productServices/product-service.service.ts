import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api';
  private imageBaseUrl = 'http://localhost:8080/api/getImageByProductId';

  constructor(private http: HttpClient) {}

  addProduct(product: any, productImage: File): Observable<any> {
    const formData = new FormData();
    formData.append('product', JSON.stringify(product));
    formData.append('product_image', productImage);
    return this.http.post(`${this.apiUrl}/addProduct`, formData);
  }

  updateProduct(product: any, productImage?: File): Observable<any> {
    const formData = new FormData();
    formData.append('product', JSON.stringify(product));
    if (productImage) {
      formData.append('product_image', productImage);
    }
    return this.http.put(`${this.apiUrl}/update`, formData);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getProduct`);
  }

  getImageUrl(productId: number): string {
    const timestamp = new Date().getTime(); // 👈 cache buster
    return `${this.imageBaseUrl}/${productId}?t=${timestamp}`;
  }
  

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteProduct/${id}`);
  }
}
