import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { apiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  public api: string = environment.apiUrl + apiService.mail;

  public postEmail(mail: any): Observable<any> {
    const url = this.api;
    console.log(url);
    return this.http.post(url, mail)
  }


}
