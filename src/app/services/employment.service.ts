import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmploymentHistory } from '../models/employment-history';
import { apiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  public api: string = environment.apiUrl + apiService.employmentHistory;

  private header = { 'Content-Type': 'application/json' };


  constructor(
    private http: HttpClient
  ) { }

  public getEmploymentHistory(): Observable<any> {
    const url = this.api;
    console.log(url);
    return this.http.get(url);
  }

  public postEmploymentHistory(dto: EmploymentHistory): Observable<any> {
    const url = this.api + '/create';
    return this.http.post(url, JSON.stringify(dto), {headers: this.header});
  }

  public putEmploymentHistory(dto: EmploymentHistory): Observable<any> {
    const url = this.api + '/update';
    console.log(url)
    return this.http.put(url, JSON.stringify(dto), {headers: this.header});
  }

  public deleteEmploymentHistory(id: string):Observable<any>{
    const url = this.api + `/delete/${id}`;
  return this.http.delete(url, {headers: this.header})
  }
}
