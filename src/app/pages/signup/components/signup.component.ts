import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../modules/core/services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  errorMessage;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  register(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value;
      console.log(user);
      this.loginService.createUser(user).subscribe(
        (resp) => {
          console.log('resp', resp);
          if (resp.error === false) {
            this.router.navigate(['/home']);
          } else {
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
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
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
  get lastnameField() {
    return this.form.get('lastname');
  }
  get nameField() {
    return this.form.get('name');
  }
}
