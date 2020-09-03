import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LoginService, CookieService],
})
export class CoreModule {}
