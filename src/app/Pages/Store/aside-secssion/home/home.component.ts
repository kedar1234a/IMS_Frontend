import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
      
  }

}
