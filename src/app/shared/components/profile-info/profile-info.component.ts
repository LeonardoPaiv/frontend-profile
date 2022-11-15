import { Component, OnInit } from '@angular/core';
import { Certificates } from 'src/app/models/certificates';
import { Education } from 'src/app/models/education';
import { Profile } from 'src/app/models/profile';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { ShortCourses } from 'src/app/models/shourt-courses';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  public profileDescription!: Profile;

  public education!: Education[];

  public employmentHistory!: EmploymentHistory[];

  public shortCourses!: ShortCourses[];

  public certificates!: Certificates[];

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.profileDescription = this.route.snapshot.data['profile'][0]
    this.education = this.route.snapshot.data['education']
    this.employmentHistory = this.route.snapshot.data['employmentHistory']
    this.certificates = this.route.snapshot.data['certificates']
    this.shortCourses = this.route.snapshot.data['shortCourses']
    console.log(this.shortCourses);

  }

  public display: boolean = false;
}
