import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SkillsService } from '../services/skills.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsResolverGuard implements Resolve<any> {

  constructor(
    private skillservice: SkillsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.skillservice.getSkills()
  }
}
