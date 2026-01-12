import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
   isExpertLogin: boolean = false;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
   const currentPath = this.route.snapshot.routeConfig?.path;
    this.isExpertLogin = currentPath === 'expert';
  }

  onLogin(): void {
     if (!this.email || !this.password) {
      alert('Please enter username and password');
      return;
    }

    if (this.isExpertLogin) {
      if (this.email === 'expert' && this.password === 'expert@123') {
        alert('Expert login successful!');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Enter Valid Expert Username and Password');
      }
    } else {
      const loginPayload = {
        email: this.email,
        password: this.password
      };

      this.loginService.postLogin(loginPayload).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));

          alert('Login successful!');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login error:', err);
          alert(err.error?.message || 'Login failed. Please try again.');
        }
      });
    }
  }
}
