import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SignupService } from '../../Services/signup.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private signupService: SignupService, private router: Router) {}

  onSubmit() {
    this.signupService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Response from backend:', response);
        alert('Login successful!');

        // Redirect user to dashboard if needed
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid email or password. Try again.');
      },
    });
  }
}
