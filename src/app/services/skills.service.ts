import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { apiService } from './api.service';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  public api: string = environment.apiUrl + apiService.skills;

  private header = { 'Content-Type': 'application/json' };

  constructor(
    private http: HttpClient
  ) { }

  public getSkills(): Observable<any> {
    const url = this.api;
    return this.http.get(url, {headers: this.header})
  }

  public postSkill(dto: Skills): Observable<any> {
    const url = this.api + '/create';
    return this.http.post(url, JSON.stringify(dto), {headers: this.header, withCredentials: true});
  }

  public putSkills(dto: Skills): Observable<any> {
    const url = this.api + '/update';
    console.log(url)
    return this.http.put(url, JSON.stringify(dto), {headers: this.header, withCredentials: true});
  }

  public deleteSkill(id: string):Observable<any>{
    const url = this.api + `/delete/${id}`;
  return this.http.delete(url, {headers: this.header, withCredentials: true})
  }
}
