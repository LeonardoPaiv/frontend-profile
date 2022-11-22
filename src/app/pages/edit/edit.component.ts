import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certificates } from 'src/app/models/certificates';
import { Education } from 'src/app/models/education';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { Profile } from 'src/app/models/profile';
import { ShortCourses } from 'src/app/models/shourt-courses';
import { Skills } from 'src/app/models/skills';
import { SoftSkills } from 'src/app/models/soft-skills';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public profileDescription!: Profile[];

  public education!: Education[];

  public employmentHistory!: EmploymentHistory[];

  public shortCourses!: ShortCourses[];

  public certificates!: Certificates[];

  public skills!: Skills[];

  public softSkills!: SoftSkills[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.profileDescription = this.route.snapshot.data['profile']
    this.education = this.route.snapshot.data['education']
    this.employmentHistory = this.route.snapshot.data['employmentHistory']
    this.certificates = this.route.snapshot.data['certificates']
    this.shortCourses = this.route.snapshot.data['shortCourses']
    this.softSkills = this.route.snapshot.data['softSkills']
    this.skills = this.route.snapshot.data['skills']

  }

}
