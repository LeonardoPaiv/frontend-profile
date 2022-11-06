import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { apiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  public api: string = environment.apiUrl + apiService.softSkills

  constructor(
    private http: HttpClient
  ) { }

  public getSoftSkills(): Observable<any> {
    const url = this.api;
    console.log(url);
    return this.http.get(url);
  }
}
