import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../modules/shared/interfaces/user';
import { LoginService } from '../../../modules/core/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User;
  welcomeMessage;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {}
  form: FormGroup;
  ngOnInit(): void {
    this.buildForm();
  }

  Login(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      this.loginService.Login(value.email, value.password).subscribe((resp) => {
        console.log(resp);
      });
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
