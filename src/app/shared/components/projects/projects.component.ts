import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public projects = [
    { project: 'SSM - Memora\'s Services Sistem', description: 'A software to handle requests of workflow from Memora Processos Inovadores, this software involves open requests, hire and dismiss, manage payroll and financial managements of projects. The architecture from the software was a concept on Microservices and uses these technologies: Oracle DB 11g, Springboot, JPA, Angular, PrimeNG.', imagePath: '../../../../assets/projects/ssmcaixapessoal.png'},
    {
      project: 'UniCEUB jogo bolinha', description: 'In this project, we worked on making our own version of a Pong Game with Python. the challenge was to only use graphics.py package, and we had two options: make a simple game, with a single speed for the ball and little to no logic to the components, or create the game with better algorithms, giving more life to the game. We chose the second option, creating an increase to the speed of the ball rather than a single speed, and the size of the player increasing while losing, and decreasing while winning throughout the game.', imagePath: '../../../../assets/projects/nossopong.png',
    },
    { project: 'Portfolio', description: 'The portfolio presented uses Angula, bootstrap, primeng for front-end and expressJS, Passport local strategy, mongoDB Atlas, bcryptjs and nodemailer using gmail smtp for back-end. Almost every information in the home page can be updated from an admin page that is only accessible with login, therefore services like post, put and delete are blocked for non logged users.', imagePath: '../../../../assets/projects/portfolio.png' },
  ]
}
