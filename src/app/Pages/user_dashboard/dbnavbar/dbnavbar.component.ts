import { Component } from '@angular/core';

@Component({
  selector: 'app-dbnavbar',
  standalone: true,
  imports: [],
  templateUrl: './dbnavbar.component.html',
  styleUrl: './dbnavbar.component.css'
})
export class DbnavbarComponent {

  
  storedUser = localStorage.getItem('username');

  uname:any=this.storedUser;

  logout(){
    if(localStorage.getItem('username')){
      localStorage.removeItem('username');
    }
  }

}
