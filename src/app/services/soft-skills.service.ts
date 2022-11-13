import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SoftSkills } from '../models/soft-skills';
import { apiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  public api: string = environment.apiUrl + apiService.softSkills;

  private header = { 'Content-Type': 'application/json' };


  constructor(
    private http: HttpClient
  ) { }

  public getSoftSkills(): Observable<any> {
    const url = this.api;
    console.log(url);
    return this.http.get(url);
  }

  public postSoftSkills(dto: SoftSkills): Observable<any> {
    const url = this.api + '/create';
    return this.http.post(url, JSON.stringify(dto), {headers: this.header});
  }

  public putSoftSkills(dto: SoftSkills): Observable<any> {
    const url = this.api + '/update';
    console.log(url)
    return this.http.put(url, JSON.stringify(dto), {headers: this.header});
  }

  public deleteSoftSkills(id: string):Observable<any>{
    const url = this.api + `/delete/${id}`;
  return this.http.delete(url, {headers: this.header})
  }
}
