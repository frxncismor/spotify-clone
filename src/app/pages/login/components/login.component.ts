import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../modules/core/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  welcomeMessage;
  form: FormGroup;
  errorMessage;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  Login(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      setTimeout(() => {
        this.signInAnimation();
        this.welcomeMessage = true;
        setTimeout(() => {
          this.loginService.login(value.email, value.password).subscribe(
            (resp) => {
              console.log('Response login', resp);
              if (resp.error === false) {
                this.signInAnimation();
                this.router.navigate(['/home']);
                this.loginService.setToken(resp.message.userId);
              } else {
                this.signOutAnimation();
                this.welcomeMessage = false;
                this.errorMessage = resp.message;
              }
            },
            (err) => {
              console.log('HTTP Error', err);
            },
            () => {
              console.log('HTTP request completed.');
            }
          );
        }, 500);
      }, 300);
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

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  get emailField() {
    return this.form.get('email');
  }
  get passwordField() {
    return this.form.get('password');
  }
}
