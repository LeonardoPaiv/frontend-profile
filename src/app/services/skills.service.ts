import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { apiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  public api: string = environment.apiUrl + apiService.skills

  constructor(
    private http: HttpClient
  ) { }

  public getSkills(): Observable<any> {
    const url = this.api;
    return this.http.get<any>(url, {headers: { 'Content-Type': 'application/json' }})
  }
}
