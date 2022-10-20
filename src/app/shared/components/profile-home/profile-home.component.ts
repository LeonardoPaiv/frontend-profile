import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public infos = [
    {title: 'PROFILE', description: 'Preencher linguiça aqui', icon: ''},
    {title: 'EMPLOYMENT HISTORY', description: 'Preencher linguiça aqui', icon: ''},
    {title: 'EDUCATION', description: 'Preencher linguiça aqui', icon: ''},
    {title: 'SHORT COURSES', description: 'Preencher linguiça aqui', icon: ''},
    {title: 'CERTIFICATES', description: 'Preencher linguiça aqui', icon: ''},
    {title: 'ACCREDITATIONS', description: 'Preencher linguiça aqui', icon: ''},
    {title: 'MORE ABOUT ME', description: 'Preencher linguiça aqui', icon: ''},
  ]

}
