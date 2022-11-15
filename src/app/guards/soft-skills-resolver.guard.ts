import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SoftSkillsService } from '../services/soft-skills.service';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsResolverGuard implements Resolve<any> {

  constructor(
    private softSkillsService: SoftSkillsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.softSkillsService.getSoftSkills();
  }
}
