import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../models/education';
import { apiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {


  public api: string = environment.apiUrl + apiService.education;

  private header = { 'Content-Type': 'application/json' };


  constructor(
    private http: HttpClient
  ) { }

  public getEducation(): Observable<any> {
    const url = this.api;
    console.log(url);
    return this.http.get(url);
  }

  public postEducation(dto: Education): Observable<any> {
    const url = this.api + '/create';
    return this.http.post(url, JSON.stringify(dto), {headers: this.header});
  }

  public putEducation(dto: Education): Observable<any> {
    const url = this.api + '/update';
    console.log(url)
    return this.http.put(url, JSON.stringify(dto), {headers: this.header});
  }

  public deleteEducation(id: string):Observable<any>{
    const url = this.api + `/delete/${id}`;
  return this.http.delete(url, {headers: this.header})
  }

}
