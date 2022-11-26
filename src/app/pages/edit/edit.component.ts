import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Certificates } from 'src/app/models/certificates';
import { Education } from 'src/app/models/education';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { Profile } from 'src/app/models/profile';
import { ShortCourses } from 'src/app/models/shourt-courses';
import { Skills } from 'src/app/models/skills';
import { SoftSkills } from 'src/app/models/soft-skills';
import { CertificateService } from 'src/app/services/certificate.service';
import { EducationService } from 'src/app/services/education.service';
import { EmploymentService } from 'src/app/services/employment.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ShortCoursesService } from 'src/app/services/short-courses.service';
import { SkillsService } from 'src/app/services/skills.service';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';
import  {  FormBuilder, FormGroup, Validators, }  from  '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public display: boolean = false;

  public tipoDialog: string = '';

  public profileDescription!: Profile[];

  public education!: Education[];

  public employmentHistory!: EmploymentHistory[];

  public shortCourses!: ShortCourses[];

  public certificates!: Certificates[];

  public skills!: Skills[];

  public softSkills!: SoftSkills[];

  public formCertificate: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    time: ['', [Validators.required]],
    description: [''],
    id: []
  });

  public formShortCourse: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    time: ['', [Validators.required]],
    description: [''],
    id: []
  });

  public formEmploy: FormGroup = this.formBuilder.group({
    company: ['', [Validators.required]],
    local: ['', [Validators.required]],
    metier: ['', [Validators.required]],
    period: ['', [Validators.required]],
    description: [],
    id: []
  });

  public formEducation: FormGroup = this.formBuilder.group({
    company: ['', [Validators.required]],
    local: ['', [Validators.required]],
    degree: ['', [Validators.required]],
    period: ['', [Validators.required]],
    description: [],
    id: []
  });

  public formSkills: FormGroup = this.formBuilder.group({
    skill: ['', [Validators.required]],
    image: ['', [Validators.required]],
    id: []
  });

  public formSoftSkills: FormGroup = this.formBuilder.group({
    softSkill: ['', [Validators.required]],
    image: ['', [Validators.required]],
    id: []
  });

  constructor(
    private route: ActivatedRoute,
    private certificateService: CertificateService,
    private educationService: EducationService,
    private employmentHistoryService: EmploymentService,
    private profileService: ProfileService,
    private shortCoursesService: ShortCoursesService,
    private skillservice: SkillsService,
    private softSkillsService: SoftSkillsService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileDescription = this.route.snapshot.data['profile']
    this.education = this.route.snapshot.data['education']
    this.employmentHistory = this.route.snapshot.data['employmentHistory']
    this.certificates = this.route.snapshot.data['certificates']
    this.shortCourses = this.route.snapshot.data['shortCourses']
    this.softSkills = this.route.snapshot.data['softSkills']
    this.skills = this.route.snapshot.data['skills']
    console.log(this.certificates)
  }

  public logout() {

  }

  public getCertificates() {
    this.certificateService.getCertificates().subscribe({
      next: res => this.certificates = res
    })
  }

  public createCertificate(dto: Certificates) {
    this.certificateService.postCertificates(dto).subscribe({
      next: () => {
        this.toastr.success('Item created', 'success');
        this.getCertificates()
      }
    })
  }

  public deleteCertificate(id: string) {
    this.certificateService.deleteCertificates(id).subscribe({
      next: () => {
        this.toastr.success('Item deleted');
        this.getCertificates()
      }
    })
  }

  public alterarCertificate(dto: Certificates) {
    dto.id = dto._id
    this.certificateService.putCertificates(dto).subscribe({
      next: () => {
        this.toastr.success('Item changed');
        this.getCertificates()
      }
    })
  }

  public getShortCourse() {
    this.shortCoursesService.getShortCourses().subscribe({
      next: res => this.shortCourses = res
    })
  }

  public createShortCourse(dto: ShortCourses) {
    this.shortCoursesService.postShortCourses(dto).subscribe({
      next: () => {
        this.toastr.success('Item created', 'success');
        this.getShortCourse()
      }
    })
  }

  public deleteShortCourse(id: string) {
    this.shortCoursesService.deleteShortCourses(id).subscribe({
      next: () => {
        this.toastr.success('Item deleted');
        this.getShortCourse()
      }
    })
  }

  public alterarShortCourse(dto: Certificates) {
    dto.id = dto._id
    this.shortCoursesService.putShortCourses(dto).subscribe({
      next: () => {
        this.toastr.success('Item changed');
        this.getShortCourse()
      }
    })
  }

  public getEmploymentHistory() {
    this.employmentHistoryService.getEmploymentHistory().subscribe({
      next: res => this.employmentHistory = res
    })
  }

  public createEmploymentHistory(dto: EmploymentHistory) {
    this.employmentHistoryService.postEmploymentHistory(dto).subscribe({
      next: () => {
        this.toastr.success('Item created', 'success');
        this.getEmploymentHistory()
      }
    })
  }

  public deleteEmploymentHistory(id: string) {
    this.employmentHistoryService.deleteEmploymentHistory(id).subscribe({
      next: () => {
        this.toastr.success('Item deleted');
        this.getEmploymentHistory()
      }
    })
  }

  public alterarEmploymentHistory(dto: EmploymentHistory) {
    dto.id = dto._id
    this.employmentHistoryService.putEmploymentHistory(dto).subscribe({
      next: () => {
        this.toastr.success('Item changed');
        this.getEmploymentHistory()
      }
    })
  }

  public getEducation() {
    this.educationService.getEducation().subscribe({
      next: res => this.education = res
    })
  }

  public createEducation(dto: Education) {
    this.educationService.postEducation(dto).subscribe({
      next: () => {
        this.toastr.success('Item created', 'success');
        this.getEducation()
      }
    })
  }

  public deleteEducation(id: string) {
    this.educationService.deleteEducation(id).subscribe({
      next: () => {
        this.toastr.success('Item deleted');
        this.getEducation()
      }
    })
  }

  public alterarEducation(dto: Education) {
    dto.id = dto._id
    this.educationService.putEducation(dto).subscribe({
      next: () => {
        this.toastr.success('Item changed');
        this.getEducation()
      }
    })
  }

  public getProfile() {
    this.profileService.getProfile().subscribe({
      next: res => this.profileDescription = res
    })
  }

  public alterarProfile(dto: Profile) {
    dto.id = dto._id
    this.profileService.putProfile(dto).subscribe({
      next: () => {
        this.toastr.success('Item changed');
        this.getEducation()
      }
    })
  }

  public getSkill() {
    this.skillservice.getSkills().subscribe({
      next: res => this.skills = res
    })
  }

  public createSkills(dto: Skills) {
    this.skillservice.postSkill(dto).subscribe({
      next: () => {
        this.toastr.success('Item created', 'success');
        this.getSkill()
      }
    })
  }

  public deleteSkill(id: string) {
    this.skillservice.deleteSkill(id).subscribe({
      next: () => {
        this.toastr.success('Item deleted');
        this.getSkill()
      }
    })
  }

  public alterarSkill(dto: Skills) {
    dto.id = dto._id
    this.skillservice.putSkills(dto).subscribe({
      next: () => {
        this.toastr.success('Item changed');
        this.getSkill()
      }
    })
  }

  public getSoftSkill() {
    this.softSkillsService.getSoftSkills().subscribe({
      next: res => this.softSkills = res
    })
  }

  public createSoftSkill(dto: SoftSkills) {
    this.softSkillsService.postSoftSkills(dto).subscribe({
      next: () => {
        this.toastr.success('Item created', 'success');
        this.getSoftSkill()
      }
    })
  }

  public deleteSoftSkill(id: string) {
    this.softSkillsService.deleteSoftSkills(id).subscribe({
      next: () => {
        this.toastr.success('Item deleted');
        this.getSoftSkill()
      }
    })
  }

  public alterarSoftSkill(dto: SoftSkills) {
    console.log(dto)
    dto.id = dto._id
    this.softSkillsService.putSoftSkills(dto).subscribe({
      next: () => {
        this.toastr.success('Item changed');
        this.getSoftSkill()
      }
    })
  }

}
