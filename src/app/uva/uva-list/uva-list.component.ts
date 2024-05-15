import { Component, Input, OnInit } from '@angular/core';

import { Uva } from '../../models/uva.model';
import { UvaService } from 'src/app/services/uva.service';

@Component({
  selector: 'app-uva-list',
  templateUrl: './uva-list.component.html',
  styleUrls: ['./uva-list.component.css']
})
export class UvaListComponent implements OnInit {

  listaUvas: Uva[] = [];

  constructor(private uvaService: UvaService) { }

  ngOnInit(): void {
    this.listaUvas = this.uvaService.getAllUvas();
    this.uvaService.uvasChanged
      .subscribe(
        (uvas: Uva[]) => {
          this.listaUvas = uvas;
        }
      )
  }

}
