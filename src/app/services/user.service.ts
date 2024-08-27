import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Rol } from '../models/rol';
import { AuthService } from './auth.service';
import { API_CONFIG } from '../../environments/environment.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseUrl = API_CONFIG.baseUrl;

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
  updateUser(user: User):Observable<User>{
    return this.http.put<User>(this.baseUrl + "profile",user,{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
  createUser(user: User):Observable<User>{
    return this.http.post<User>(this.baseUrl + "users",user,{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
  getPublicProfiles():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + "public-profiles")
  }

  uploadAvatar(formData:FormData): Observable<any> {

    return this.http.post<any>(this.baseUrl + 'avatar/upload', formData,{headers:{Authorization:`Bearer ${this.authService.getToken()}`}});
  }

}
