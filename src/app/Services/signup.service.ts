import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signup_data } from '../model/signup-data';

@Injectable({
  providedIn: 'root', // Makes service available throughout the app
})
export class SignupService {
  private apiUrl = 'http://localhost:8080/api/register'; // Update API endpoint
  private signInUrl ="http://localhost:8080/api/login";

  // private apiUrl = 'http://localhost:8080/api/login'; // Update API endpoint

  constructor(private http: HttpClient) {}

  // Send signup data to Spring Boot API
  storeSignupDetails(signupData: signup_data): Observable<any> {
    return this.http.post<any>(this.apiUrl, signupData);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.signInUrl, { username, password });
  }

  // Fetch all users (optional)
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  private SignupDetails: signup_data[] = [];
  getUserByEmail(email: string): signup_data | undefined {
    return this.SignupDetails.find((SignupDetails) => SignupDetails.email);
  }
  validateUser(email: string, password: string) {
    return this.SignupDetails.some(
      (SignupDetails) =>
        SignupDetails.email === email && SignupDetails.password === password
    );
  }
}



// import { Injectable } from '@angular/core';
// // import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { signup_data } from '../model/signup-data';

// @Injectable({
//   providedIn: 'root'
// })
// export class SignupService {
//   private apiUrl = 'http://localhost:8080/api/register'; // Spring Boot API

//   constructor(private http: HttpClient) { }

//   storeSignupDetails(details: signup_data){
//     this.SignupDetails.push(details);
//     console.log("Store Details:",this.SignupDetails);
//   }

//     // Fetch users from API
//     getUsers(): Observable<any[]> {
//       return this.http.get<any[]>(this.apiUrl);
//     }

//     }

//   }
