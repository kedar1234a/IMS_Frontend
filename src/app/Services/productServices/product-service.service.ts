import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';
  private imageBaseUrl = 'http://localhost:8080/api/products/images'; // Folder URL

  constructor(private http: HttpClient) {}




  addProduct(product: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/upload`, product);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }

  getImageUrl(imageName: string): string {
  
    return this.imageBaseUrl + imageName; // Construct full image URL
}

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
