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
  
    const token = localStorage.getItem('jwtToken'); // assuming you stored token in localStorage

    const headers = {
      'Authorization': `Bearer ${token}`,'Content-Type':'application/json'
    };
  
    return this.http.post(`${this.apiUrl}/addProduct`, formData, { headers });
  }
  

  updateProduct(product: any, productImage?: File): Observable<any> {
    const formData = new FormData();
    formData.append('product', JSON.stringify(product));
    if (productImage) {
      formData.append('product_image', productImage);
    }
    return this.http.put(`${this.apiUrl}/update`, formData);
  }

  getProducts(userId?: number): Observable<any[]> {
    if (userId == null) {
      console.error('User ID is required to fetch products');
      return new Observable(); // Or throw an error if preferred
    }
    return this.http.get<any[]>(`${this.apiUrl}/getProduct/${userId}`);
  }



  
  getImageUrl(productId: number): string {
    const timestamp = new Date().getTime(); 
    return `${this.imageBaseUrl}/${productId}?t=${timestamp}`;
  }
 
  
  deleteProduct(product_id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/deleteProduct/${product_id}`);
  }
  
 
}
