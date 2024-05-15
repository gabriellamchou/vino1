import { Component, OnInit } from '@angular/core';
import { VinoService } from '../services/vino.service';
import { Vino } from '../models/vino.model';

@Component({
  selector: 'app-vino',
  templateUrl: './vino.component.html',
  styleUrls: ['./vino.component.css']
})
export class VinoComponent implements OnInit {
  constructor(
    private vinoService: VinoService
  ) { }

  vinoSelected!: Vino;

  ngOnInit(): void {
    this.vinoService.vinoSelected.subscribe(
      (vino: Vino) => {
        this.vinoSelected = vino;
      }
    )
  }

}
