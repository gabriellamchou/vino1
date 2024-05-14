import { Component, OnInit } from '@angular/core';
import { Vino } from '../models/vino.model';

@Component({
  selector: 'app-vino',
  templateUrl: './vino.component.html',
  styleUrls: ['./vino.component.css']
})
export class VinoComponent implements OnInit {
  vinoSelected!: Vino;

  constructor() { }

  ngOnInit(): void {
  }

  onVinoSelected(vino: Vino) {
    this.vinoSelected = vino;
  }

}
