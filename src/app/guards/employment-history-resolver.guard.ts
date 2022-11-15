import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmploymentService } from '../services/employment.service';

@Injectable({
  providedIn: 'root'
})
export class EmploymentHistoryResolverGuard implements Resolve<any> {

  constructor(
    private employmentHistoryService: EmploymentService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.employmentHistoryService.getEmploymentHistory();
  }

}
