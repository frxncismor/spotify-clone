import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../shared/interfaces/user';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private cookies: CookieService,
    private router: Router
  ) {}

  register(user: User): Observable<any> {
    return this.http.post(`${environment.api_url}/auth/signup`, user);
  }

  login(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post(`${environment.api_url}/auth/login`, user);
  }

  getCurrentUser(): Observable<any> {
    const token = this.getToken();
    console.log('getCurrentUser token', token);
    return this.http.get(`${environment.api_url}/auth/current-user/${token}`);
  }

  logout(): any {
    this.cookies.delete('userId');
    this.router.navigate(['/login']);
  }

  setToken(userId: string): void {
    this.cookies.set('userId', userId, 1);
  }

  getToken(): any {
    return this.cookies.get('userId');
  }
}
