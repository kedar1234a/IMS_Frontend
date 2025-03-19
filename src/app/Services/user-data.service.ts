import { Injectable } from '@angular/core';
import { userData } from '../model/userData.type';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  private url ="http://localhost:8080/api/";
  private userData:userData[] = [];
  constructor() { }

  storeUserData(data: userData){
    this.userData.push(data);
    console.log('Stored Details:', this.userData);    
  }
  getUserData():userData[]{
    return this.userData;
  }
}
