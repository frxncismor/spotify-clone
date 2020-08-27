import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  createUser(user: User): any {
    console.log(user);
    return this.http.post(`${environment.api_url}/auth/signup`, user);
  }

  Login(email: string, password: string): any {
    console.log(email, password);
    const user = { email, password };
    return this.http.post(`${environment.api_url}/auth/login`, user);
  }
}
