import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('navEvent') navEvent = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  navToVinos() {
    this.navEvent.emit("vinos");
  }
  
  navToUvas() {
    this.navEvent.emit("uvas");
  }

}
