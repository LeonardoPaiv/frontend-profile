import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/projects';
import { apiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public api: string = environment.apiUrl + apiService.projects;

  private header = { 'Content-Type': 'application/json' };


  constructor(
    private http: HttpClient
  ) { }

  public getProjects(): Observable<any> {
    const url = this.api;
    console.log(url);
    return this.http.get(url);
  }

  public postProjects(dto: Projects): Observable<any> {
    const url = this.api + '/create';
    return this.http.post(url, JSON.stringify(dto), {headers: this.header, withCredentials: true});
  }

  public putProjects(dto: Projects): Observable<any> {
    const url = this.api + '/update';
    console.log(url)
    return this.http.put(url, JSON.stringify(dto), {headers: this.header, withCredentials: true});
  }

  public deleteProjects(id: string):Observable<any>{
    const url = this.api + `/delete/${id}`;
  return this.http.delete(url, {headers: this.header, withCredentials: true})
  }

}
