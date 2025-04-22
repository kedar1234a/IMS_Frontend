import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesProductService {


  private apiUrl = 'http://localhost:8080/api/customers';
  private getCount = 'http://localhost:8080/api/count';
  private getBills = 'http://localhost:8080/api/fetchAllBills';

  constructor(private http: HttpClient) {}

  saveBill(billData: any): Observable<any> {
    return this.http.post(this.apiUrl, billData,  { responseType: 'text' });
  }

 
  getAllBill(): Observable<number> {
    return this.http.get<number>(this.getCount);
  }

  getAllCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.getBills);
  }

}
