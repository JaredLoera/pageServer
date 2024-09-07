import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../../environments/environment.api';
import { Observable } from 'rxjs';
import { Document } from '../models/documents';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private authService:AuthService, private http:HttpClient) { }
  private baseUrl = API_CONFIG.baseUrl;
  get(): Observable<Document[]> {
    return this.http.get<Document[]>(this.baseUrl + "documents",{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
  download(id:string): Observable<Blob> {
    return this.http.get(this.baseUrl + `documents/${id}/download`,{responseType: 'blob', headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
}
