import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signup_data } from '../model/signup-data';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost:8080/api/register';
  private signInUrl = 'http://localhost:8080/api/login';
  private msgURL = 'http://localhost:8080/api/message';
  private usersUrl = 'http://localhost:8080/api/users'; // Corrected endpoint for fetching users

  constructor(private http: HttpClient) {}

  storeSignupDetails(signupData: signup_data): Observable<any> {
    return this.http.post<any>(this.apiUrl, signupData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.signInUrl, { email, password }, { headers });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl); // Fixed incorrect API call
  }

  getMessage(): Observable<string> {
    return this.http.get(this.msgURL, { responseType: 'text' });
  }
}
