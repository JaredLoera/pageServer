import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial ,PDFTutorial,tutorialPdf } from '../models/tutorial';
import { API_CONFIG, environment } from '../../environments/environment.api';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private baseUrl = API_CONFIG.baseUrl;
  constructor(private http: HttpClient,private authService: AuthService) { }
  get(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.baseUrl + "tutorials",{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
  create(formData: FormData): Observable<PDFTutorial> {
    return this.http.post<PDFTutorial>(this.baseUrl + "tutorials", formData,{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
  update(id: number, tutorial: Tutorial): Observable<Tutorial> {
    return this.http.put<Tutorial>(this.baseUrl + `tutorials/${id}`, tutorial,{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
  getTutorial(id: string): Observable<Blob> {
    return this.http.get(this.baseUrl + `tutorials/${id}`,{responseType: 'blob' ,headers:{Authorization:`Bearer ${this.authService.getToken()}`, 'Content-Type': 'octet/stream','Accept': 'octet/stream'}})
  }
  getDocumentData(id: string): Observable<tutorialPdf> {
    return this.http.get<tutorialPdf>(this.baseUrl + `tutorials/${id}/pdf`,{headers:{Authorization:`Bearer ${this.authService.getToken()}`}})
  }
}
