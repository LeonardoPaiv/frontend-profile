import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SoftSkills } from 'src/app/models/soft-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills!: Skills[];
  public softSkills!: SoftSkills[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.softSkills = this.route.snapshot.data['softSkills']
    this.skills = this.route.snapshot.data['skills']
  }
}
