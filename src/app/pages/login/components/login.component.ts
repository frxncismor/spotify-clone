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
      console.log(value);
      setTimeout(() => {
        this.signInAnimation();
        this.welcomeMessage = true;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);
      }, 300);
      // this.loginService.Login(value.email, value.password).subscribe((resp) => {
      //   this.signInAnimation();
      //   console.log(resp);
      // });
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
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
