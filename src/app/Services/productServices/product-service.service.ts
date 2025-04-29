import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api';
  private imageBaseUrl = 'http://localhost:8080/api/getImageByProductId';

  constructor(private http: HttpClient) {}

  addProduct(productData: any, token: string): Observable<any> {
    const formData = new FormData();
    formData.append('name', productData.name);
    if (productData.price !== undefined) formData.append('price', productData.price);
    if (productData.category) formData.append('category', productData.category);
    if (productData.quantity !== undefined) formData.append('quantity', productData.quantity);
    if (productData.description) formData.append('description', productData.description);
    if (productData.gstType) formData.append('gstType', productData.gstType);
    if (productData.gstRate !== undefined) formData.append('gstRate', productData.gstRate);
    formData.append('image', productData.image);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post(`${this.apiUrl}/addProduct`, formData, { headers });
  }

  getProductsByUser(): Observable<any[]> {

    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/products/byUser`, { headers });
  }
  
  

  updateProduct(product: any, productImage?: File): Observable<any> {
    const formData = new FormData();
    formData.append('product', JSON.stringify(product));
    if (productImage) {
      formData.append('product_image', productImage);
    }
    return this.http.put(`${this.apiUrl}/update`, formData);
  }


  
  getImageUrl(productId: number): string {
    const timestamp = new Date().getTime(); 
    return `${this.imageBaseUrl}/${productId}?t=${timestamp}`;
  }
 
  
  deleteProduct(product_id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/deleteProduct/${product_id}`);
  }
  
 
}
