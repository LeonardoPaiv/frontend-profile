import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() public sidebarOn = new EventEmitter();

  public showSidebar() {
    this.display = true
    this.sidebarOn.emit(this.display)
  }

  public hideSidebar() {
    this.sidebarOn.emit(false)
  }
}
