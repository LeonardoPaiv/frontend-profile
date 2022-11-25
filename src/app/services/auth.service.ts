import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificates } from '../models/certificates';
import { Login } from '../models/login';
import { apiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public api: string = environment.loginUrl + apiService.login;

  private header = { 'Content-Type': 'application/json' };


  constructor(
    private http: HttpClient
  ) { }

  public login(login: Login): Observable<any> {
    const url = this.api + '/login';
    return this.http.post(url, JSON.stringify(login), {headers: this.header, withCredentials: true})
  }

  public authenticated(): Observable<any> {
    const url = this.api + '/authenticated'
    return this.http.get(url, {withCredentials: true})
  }


}
