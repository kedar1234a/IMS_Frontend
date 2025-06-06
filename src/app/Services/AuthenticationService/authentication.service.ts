import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../../model/User-Data';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/api/register';
  private signInUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  storeSignupDetails(UserData: UserData): Observable<any> {
    return this.http.post<any>(this.apiUrl, UserData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.signInUrl, { email, password }, { headers });
  }
  
}
