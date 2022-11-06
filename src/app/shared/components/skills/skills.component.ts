import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills!: {skill: string, image: string}[];
  public softSkills!: {softSkill: string, image: string}[];


  public getSkills() {
    this.skillsService.getSkills().subscribe({
      next: res => this.skills = res,
      error: e => console.error(e)
    })
  }

  public getSoftSkills() {
    this.softSKillsService.getSoftSkills().subscribe({
      next: res => this.softSkills = res,
      error: e => console.log(e)
    })
  }

  constructor(
    private skillsService: SkillsService,
    private softSKillsService: SoftSkillsService
  ) { }

  ngOnInit(): void {
    this.getSkills()
    this.getSoftSkills()
  }
}
