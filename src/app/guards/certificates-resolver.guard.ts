import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CertificateService } from '../services/certificate.service';

@Injectable({
  providedIn: 'root'
})
export class CertificatesResolverGuard implements Resolve<any>{

  constructor(
    private certificateService: CertificateService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.certificateService.getCertificates();
  }
}
