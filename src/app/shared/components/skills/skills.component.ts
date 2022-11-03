import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills!: {skill: string, image: string}[];


  public getSkills() {
    this.skillsService.getSkills().subscribe({
      next: res => this.skills = res,
      error: e => console.error(e)
    })
  }

  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
    this.getSkills()
  }

  public softSkills: {softSkill: string, image: string}[] = [
    {softSkill: 'Ethic', image: 'https://cdn-icons-png.flaticon.com/512/6105/6105970.png'},
    {softSkill: 'Empathy', image: 'https://cdn-icons-png.flaticon.com/512/2967/2967514.png'},
    {softSkill: 'Proactivity', image: 'https://cdn-icons-png.flaticon.com/512/1066/1066385.png'},
    {softSkill: 'Creativity', image: 'https://cdn-icons-png.flaticon.com/512/3135/3135733.png'},
    {softSkill: 'Teamwork', image: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png'},
    {softSkill: 'Leadership', image: 'https://cdn-icons-png.flaticon.com/512/4818/4818373.png'},
    {softSkill: 'Organization', image: 'https://cdn-icons-png.flaticon.com/512/7551/7551440.png'},
    {softSkill: 'Quick learning', image: 'https://cdn-icons-png.flaticon.com/512/7910/7910040.png'},
    {softSkill: 'Calm', image: 'https://cdn-icons-png.flaticon.com/512/2593/2593830.png'}
  ]
}
