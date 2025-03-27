import { Component } from '@angular/core';
import { LandingNavComponent } from '../../Components/navbar/landing-nav/landing-nav.component';
import { LandingFooterComponent } from '../../Components/footer/landing-footer/landing-footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [LandingNavComponent,LandingFooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
