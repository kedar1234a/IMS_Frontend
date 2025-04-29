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

  constructor(private http: HttpClient) {}

  register(user: UserData): Observable<string> {
    return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'text' });
  }


  login(authRequest: AuthRequest): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, authRequest, { responseType: 'text' });
  }
  

}
