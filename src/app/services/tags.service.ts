import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';
import { environment } from '../../environments/environment.api';


@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.apiUrl;

  get(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.baseUrl + 'tags');
  }
}
