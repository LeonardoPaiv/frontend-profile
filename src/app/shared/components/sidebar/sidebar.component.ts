import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public softSkills: {softSkill: string, image: string}[] = [
    {softSkill: 'Empathy', image: 'https://cdn-icons-png.flaticon.com/512/2967/2967514.png'},
    {softSkill: 'Proactivity', image: 'https://cdn-icons-png.flaticon.com/512/1066/1066385.png'},
    {softSkill: 'Creativity', image: 'https://cdn-icons-png.flaticon.com/512/3135/3135733.png'},
    {softSkill: 'Teamwork', image: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png'},
    {softSkill: 'Organization', image: 'https://cdn-icons-png.flaticon.com/512/7551/7551440.png'}
  ]

  public skills: {skill: string, image: string}[] = [
    {skill: 'Typescript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
    {skill: 'Angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'},
    {skill: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'},
    {skill: 'Rancher', image: 'https://www.vectorlogo.zone/logos/rancher/rancher-icon.svg'},
    {skill: 'Openshift', image: 'https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg'}
  ]
}