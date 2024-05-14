import { Component, Input, OnInit } from '@angular/core';

import { Vino } from 'src/app/models/vino.model';

@Component({
  selector: 'app-vino-detail',
  templateUrl: './vino-detail.component.html',
  styleUrls: ['./vino-detail.component.css']
})
export class VinoDetailComponent implements OnInit {
  @Input() vinoDetail!: Vino;

  constructor() { }

  ngOnInit(): void {
  }

}
