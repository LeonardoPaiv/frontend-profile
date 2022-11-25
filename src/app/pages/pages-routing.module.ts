import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CertificatesResolverGuard } from '../guards/certificates-resolver.guard';
import { EducationResolverGuard } from '../guards/education-resolver.guard';
import { EmploymentHistoryResolverGuard } from '../guards/employment-history-resolver.guard';
import { ProfileResolverGuard } from '../guards/profile-resolver.guard';
import { ShortCoursesResolverGuard } from '../guards/short-courses-resolver.guard';
import { SkillsResolverGuard } from '../guards/skills-resolver.guard';
import { SoftSkillsResolverGuard } from '../guards/soft-skills-resolver.guard';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      profile: ProfileResolverGuard,
      education: EducationResolverGuard,
      employmentHistory: EmploymentHistoryResolverGuard,
      certificates: CertificatesResolverGuard,
      shortCourses: ShortCoursesResolverGuard,
      skills: SkillsResolverGuard,
      softSkills: SoftSkillsResolverGuard,
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login'
  },
  {
    path: 'admin/edit',
    component: EditComponent,
    title: 'Administration',
    canActivate: [AuthGuard],
    resolve: {
      profile: ProfileResolverGuard,
      education: EducationResolverGuard,
      employmentHistory: EmploymentHistoryResolverGuard,
      certificates: CertificatesResolverGuard,
      shortCourses: ShortCoursesResolverGuard,
      skills: SkillsResolverGuard,
      softSkills: SoftSkillsResolverGuard,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
