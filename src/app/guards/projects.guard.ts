import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsGuard implements Resolve<any> {

  constructor(
    private projectsService: ProjectsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.projectsService.getProjects();
  }

}
