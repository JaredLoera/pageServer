import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Rol } from '../models/rol';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseUrl = "http://localhost:3333/"
  constructor(private http: HttpClient,private authService: AuthService) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + "users",{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
  getRols():Observable<Rol[]>{ 
    return this.http.get<Rol[]>(this.baseUrl + "rols",{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
  getProfile():Observable<User>{
    return this.http.get<User>(this.baseUrl + "perfil",{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
}
