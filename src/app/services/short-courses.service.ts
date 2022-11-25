import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShortCourses } from '../models/shourt-courses';
import { apiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ShortCoursesService {

  public api: string = environment.apiUrl + apiService.shortCourses;

  private header = { 'Content-Type': 'application/json' };


  constructor(
    private http: HttpClient
  ) { }

  public getShortCourses(): Observable<any> {
    const url = this.api;
    console.log(url);
    return this.http.get(url);
  }

  public postShortCourses(dto: ShortCourses): Observable<any> {
    const url = this.api + '/create';
    return this.http.post(url, JSON.stringify(dto), {headers: this.header, withCredentials: true});
  }

  public putShortCourses(dto: ShortCourses): Observable<any> {
    const url = this.api + '/update';
    console.log(url)
    return this.http.put(url, JSON.stringify(dto), {headers: this.header, withCredentials: true});
  }

  public deleteShortCourses(id: string):Observable<any>{
    const url = this.api + `/delete/${id}`;
  return this.http.delete(url, {headers: this.header, withCredentials: true})
  }
}
