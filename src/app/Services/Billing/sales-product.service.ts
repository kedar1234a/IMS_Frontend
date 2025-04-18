import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesProductService {


  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  saveBill(billData: any): Observable<any> {
    return this.http.post(this.apiUrl, billData,  { responseType: 'text' });
  }
}
