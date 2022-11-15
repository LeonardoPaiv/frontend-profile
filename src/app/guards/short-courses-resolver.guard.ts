import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShortCoursesService } from '../services/short-courses.service';

@Injectable({
  providedIn: 'root'
})
export class ShortCoursesResolverGuard implements Resolve<any> {

  constructor(
    private shortCoursesService: ShortCoursesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.shortCoursesService.getShortCourses();
  }
}
