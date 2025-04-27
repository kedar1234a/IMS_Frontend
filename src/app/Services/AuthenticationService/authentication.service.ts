import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../../model/User-Data';

export interface AuthRequest {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/api';
  private apiUrl = 'http://localhost:8080/api/register';
  private signInUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  register(user: UserData): Observable<string> {
    return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'text' });
  }


  login(authRequest: AuthRequest): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, authRequest, { responseType: 'text' });
  }
  
  logout(): Observable<string> {
    return this.http.post(`${this.baseUrl}/logout`, {}, { responseType: 'text' });
  }
}
