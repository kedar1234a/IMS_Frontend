import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

   storedUser = localStorage.getItem('username');

  uname:any=this.storedUser;

  logout(){
    if(localStorage.getItem('username')){
      localStorage.removeItem('username');
    }
  }

}
