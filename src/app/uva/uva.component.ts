import { Component, OnInit } from '@angular/core';
import { Uva } from '../models/uva.model';

@Component({
  selector: 'app-uva',
  templateUrl: './uva.component.html',
  styleUrls: ['./uva.component.css']
})
export class UvaComponent implements OnInit {
  uvaNueva!: Uva;

  constructor() { }

  ngOnInit(): void {
  }

  onAddedUva(uva: Uva) {
    this.uvaNueva = uva;
  }

}
