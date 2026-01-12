import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-loginexpert',
  templateUrl: './loginexpert.component.html',
  styleUrls: ['./loginexpert.component.css']
})
export class LoginexpertComponent {
 email: string = '';
  password: string = '';

  constructor(private router: Router, private loginService:LoginService) {}
 
   onLogin(): void {
    if (!this.email || !this.password) {
      alert('Please enter username and password');
      return;
    }

    const loginPayload = {
      email: this.email,
      password: this.password
    };

    this.loginService.postLogin(loginPayload).subscribe({
      next: (res) => {
      
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        alert('Login successful!');
        this.router.navigate(['/dashboard']); 
      },
      error: (err) => {
        console.error('Login error:', err);
        alert(err.error?.message || 'Login failed. Please try again.');
      }
    });
   }
}
