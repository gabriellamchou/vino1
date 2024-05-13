import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vino-item',
  templateUrl: './vino-item.component.html',
  styleUrls: ['./vino-item.component.css']
})
export class VinoItemComponent implements OnInit {
  vinos = [];

  constructor() { }

  ngOnInit(): void {
  }

}
