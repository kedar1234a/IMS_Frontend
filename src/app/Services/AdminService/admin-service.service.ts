import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {}

  // Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  // Approve user (set status to ACTIVE)
  approveUser(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/approve/${id}`, null); // No body needed for approval
  }

  // Reject user (set status to REJECTED)
  rejectUser(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/reject/${id}`, null); // No body needed for rejection
  }
}
