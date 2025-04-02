import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api';
  private imageBaseUrl = 'http://localhost:8080/api/getImageByProductId'; // Correct image URL

  constructor(private http: HttpClient) {}

  addProduct(product: any, productImage: File): Observable<any> {
    const formData = new FormData();
    
    // Convert product object to JSON string
    formData.append('product', JSON.stringify(product));

    // Append image file
    formData.append('product_image', productImage);

    return this.http.post(`${this.apiUrl}/addProduct`, formData);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getProduct`);
  }

  getImageUrl(imageName: string): string {
    return `${this.imageBaseUrl}/${imageName}`; // Correct concatenation
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteProduct/${id}`);
  }
}
