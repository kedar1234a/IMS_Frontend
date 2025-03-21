import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/admin/login'; // Mock API endpoint

  private signInUrl ="http://localhost:8080/api/admin/register";

  constructor(private http:HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  // Register (Sign Up) API
  register(username: string,email:string, password: string): Observable<any> {
    return this.http.post<any>(this.signInUrl, { username, email,password });
  }
}
