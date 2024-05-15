import { Component, OnInit } from '@angular/core';

import { Vino } from '../../models/vino.model';
import { VinoService } from 'src/app/services/vino.service';

@Component({
  selector: 'app-vinos-list',
  templateUrl: './vinos-list.component.html',
  styleUrls: ['./vinos-list.component.css']
})
export class VinosListComponent implements OnInit {
  constructor(
    private vinoService: VinoService
  ) { }

  listaVinos: Vino[] = [];

  ngOnInit(): void {
    this.listaVinos = this.vinoService.getListaVinos();
  }
}
