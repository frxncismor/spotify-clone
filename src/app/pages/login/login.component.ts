import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
  };

  loginCorrect = true;
  welcomeMessage;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginCorrect) {
      console.log('Usuario', this.user);
      this.signInAnimation();

      setTimeout(() => {
        this.welcomeMessage = true;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 700);
      }, 500);
    } else {
      this.signOutAnimation();
    }
  }

  signInAnimation(): void {
    const loginCard = document.querySelector('.card__login');
    loginCard.classList.remove('signOut');
    loginCard.classList.add('signIn');
  }

  signOutAnimation(): void {
    const loginCard = document.querySelector('.card__login');
    loginCard.classList.remove('signIn');
    loginCard.classList.add('signOut');
  }
}
