import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/core/services/login.service';
import { User } from '../../modules/shared/interfaces/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  user: User;
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(): any {
    this.user = this.loginService.getCurrentUser().subscribe((res) => {
      this.user = res.message;
    });
  }
}
