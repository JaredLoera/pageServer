import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:3333/"

  constructor(private http: HttpClient) { }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.baseUrl + "login", user)
  }
  setToken(token: Token): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('token', token.value)
    }
  }
  getToken(): string  | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }
  logout() {
   this.http.get(this.baseUrl + "logout",{headers:{Authorization:`Bearer${this.getToken()}`}})
    localStorage.removeItem('token')
  }
  isAuthenticated(): boolean {
    if (typeof localStorage === 'undefined') {
      return false
    }
    return localStorage.getItem('token') ? true : false
  }
}
