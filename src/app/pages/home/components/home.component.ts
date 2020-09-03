import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../modules/core/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser(): void {
    this.loginService.getCurrentUser().subscribe((user) => {
      console.log('getCurrentUser response', user);
    });
  }
}
