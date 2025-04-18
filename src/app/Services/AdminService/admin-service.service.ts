import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private apiURL = "http://localhost:8080/api";
  getUser():Observable<any[]>{
    return this.http.get<any[]>(`${this.apiURL}/user`)
  }
  
}
