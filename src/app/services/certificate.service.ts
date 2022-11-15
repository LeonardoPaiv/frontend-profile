import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificates } from '../models/certificates';
import { apiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  public api: string = environment.apiUrl + apiService.certificates;

  private header = { 'Content-Type': 'application/json' };


  constructor(
    private http: HttpClient
  ) { }

  public getCertificates(): Observable<any> {
    const url = this.api;
    console.log(url);
    return this.http.get(url);
  }

  public postCertificates(dto: Certificates): Observable<any> {
    const url = this.api + '/create';
    return this.http.post(url, JSON.stringify(dto), {headers: this.header});
  }

  public putCertificates(dto: Certificates): Observable<any> {
    const url = this.api + '/update';
    console.log(url)
    return this.http.put(url, JSON.stringify(dto), {headers: this.header});
  }

  public deleteCertificates(id: string):Observable<any>{
    const url = this.api + `/delete/${id}`;
  return this.http.delete(url, {headers: this.header})
  }
}
