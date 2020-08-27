import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../modules/core/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.register();
  }

  register(): void {
    const user = {
      name: 'Francisco',
      lastname: 'Moreno',
      email: 'frxncismor@test.com',
      password: '123456789',
    };
    this.loginService.createUser(user).subscribe((resp) => {
      console.log(resp);
    });
  }
}
