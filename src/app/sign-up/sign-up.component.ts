
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSignup() {
    // Save user data in localStorage
    localStorage.setItem('user', JSON.stringify({
      email: this.email,
      password: this.password
    }));

    alert('Account Created! Please Login.');
    this.router.navigate(['/login']);
  }
}
