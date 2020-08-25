import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent, SignupComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
