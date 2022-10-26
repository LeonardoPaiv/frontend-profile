import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public goHome() {
    this.route.navigate([''])
  }

  public display: boolean = false;

}
