import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Certificates } from 'src/app/models/certificates';
import { Education } from 'src/app/models/education';
import { Profile } from 'src/app/models/profile';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { ShortCourses } from 'src/app/models/shourt-courses';
import { CertificateService } from 'src/app/services/certificate.service';
import { EducationService } from 'src/app/services/education.service';
import { EmploymentService } from 'src/app/services/employment.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ShortCoursesService } from 'src/app/services/short-courses.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  public profileDescription!: Profile;

  public education!: Education;

  public employmentHistory!: EmploymentHistory;

  public shortCourses!: ShortCourses;

  public certificates!: Certificates;

  constructor(
    private certificateService: CertificateService,
    private educationService: EducationService,
    private employmentService: EmploymentService,
    private profileService: ProfileService,
    private shortCoursesService: ShortCoursesService,
    private toastr: ToastrService
  ) {
    this.getProfile();
    this.getEducation();
    this.getEmployment();
    this.getshortCourses();
    this.getCertificate();
  }

  ngOnInit(): void {}

  public display: boolean = false;

  public infos = [
    { title: 'PROFILE', description: 'Preencher linguilinguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aqui', icon: '' },
    { title: 'EMPLOYMENT HISTORY', description: 'Preencher linguiça aqui Preencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aqui', icon: '' },
    { title: 'EDUCATION', description: 'Preencher linguiça aqui Preencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aqui', icon: '' },
    { title: 'SHORT COURSES', description: 'Preencher linguiça aqui Preencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aqui', icon: '' },
    { title: 'CERTIFICATES', description: 'Preencher linguiça aqui Preencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aqui', icon: '' },
    { title: 'ACCREDITATIONS', description: 'Preencher linguiça aqui Preencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aquiPreencher linguiça aqui', icon: '' },
  ];

  private getProfile() {
    this.profileService.getProfile().subscribe({
      next: res => this.profileDescription = res,
      error: () => this.toastr.error('something goes wrong', 'Miss comunication')
    })
  }

  private getEducation() {
    this.educationService.getEducation().subscribe({
      next: res => this.education = res,
      error: () => this.toastr.error('something goes wrong', 'Miss comunication')
    })
  }

  private getEmployment() {
    this.employmentService.getEmploymentHistory().subscribe({
      next: res => this.employmentHistory = res,
      error: () => this.toastr.error('something goes wrong', 'Miss comunication')
    })
  }

  private getshortCourses() {
    this.shortCoursesService.getShortCourses().subscribe({
      next: res => this.shortCourses = res,
      error: () => this.toastr.error('something goes wrong', 'Miss comunication')
    })
  }

  private getCertificate() {
    this.certificateService.getCertificates().subscribe({
      next: res => this.certificates = res,
      error: () => this.toastr.error('something goes wrong', 'Miss comunication')
    })
  }
}
