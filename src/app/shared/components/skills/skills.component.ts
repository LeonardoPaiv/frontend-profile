import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public getSkills() {
    this.skillsService.getSkills().subscribe({
      next: res => console.log(res),
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

  public skills: {skill: string, image: string}[] = [
    {skill: 'Typescript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
    {skill: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'},
    {skill: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
    {skill: 'NodeJS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
    {skill: 'Express', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'},
    {skill: 'NestJs', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'},
    {skill: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'},
    {skill: 'Rancher', image: 'https://www.vectorlogo.zone/logos/rancher/rancher-icon.svg'},
    {skill: 'Openshift', image: 'https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg'}
  ]
}