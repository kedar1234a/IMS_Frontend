import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  addProduct(productData: any, imageFile: File, token: string) {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('category', productData.category);
    formData.append('quantity', productData.quantity);
    formData.append('description', productData.description);
    formData.append('gstType', productData.gstType);
    formData.append('gstRate', productData.gstRate);
    formData.append('image', imageFile);
   
    formData.forEach((value, key) => console.log(key, value));

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    console.log(headers.get('Authorization')); 

    return this.http.post(`${this.apiUrl}/addProduct`, formData, { headers });
  }


  getProducts(): Observable<any[]> {

    const token = localStorage.getItem("token")
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.get<any[]>(`${this.apiUrl}/showProduct`, { headers });
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
    
    return `${this.apiUrl}/getImage/${productId}`;
  }
 
  
  deleteProduct(product_id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/deleteProduct/${product_id}`);
  }
  
 
}
