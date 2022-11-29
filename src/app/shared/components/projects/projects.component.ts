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
    { project: 'SSM - Memora\'s Services Sistem', description: 'A software to handle requests of workflow from Memora Processos Inovadores, this software involves open requests, hire and dismiss, manage payroll, and financial managements of projects. The architecture from the software was a concept on Microservices and uses those technologies: Oracle DB 11g, Springboot, JPA, Angular, PrimeNG.', imagePath: '../../../../assets/WhatsApp Image 2022-06-04 at 00.16.00.jpeg' },
    {
      project: 'UniCEUB jogo bolinha', description: 'In this project we work to make our own version of a Pong game with Python. The challenge came when we could only use the graphics.py package. We have two choices, make a simple game with a single speed for the ball and not much logic to the components. But we decided to make better algorithms and give more life to the game, so in our game, the ball speed increases when hitting the player, the player increases his size when is losing and decreases when is winning.', imagePath: '../../../../assets/WhatsApp Image 2022-06-04 at 00.16.00.jpeg',
    },
    { project: 'Portfolio', description: 'This portfolio that you are checking right now uses Angula, bootstrap, primeng for front-end and expressJS, Passport local strategy, mongoDB Atlas, bcryptjs and nodemailer using gmail smtp. Almost every information in the home page can be updated from an admin page that is only accessible with login, also the services like post, put and delete are blocked for non logged users.', imagePath: '../../../../assets/WhatsApp Image 2022-06-04 at 00.16.00.jpeg' },
  ]
}
