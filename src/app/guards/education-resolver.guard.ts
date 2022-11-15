import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EducationService } from '../services/education.service';

@Injectable({
  providedIn: 'root'
})
export class EducationResolverGuard implements Resolve<any>{

  constructor(
    private educationService: EducationService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.educationService.getEducation();
  }

}
