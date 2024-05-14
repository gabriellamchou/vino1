import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Vino } from '../../models/vino.model';

@Component({
  selector: 'app-vinos-list',
  templateUrl: './vinos-list.component.html',
  styleUrls: ['./vinos-list.component.css']
})
export class VinosListComponent implements OnInit {
  @Output() vinoSelected = new EventEmitter<Vino>();

  listaVinos: Vino[] = [
    new Vino(
      1,
      'Ultreia Saint Jacques 2021',
      11.7,
      1,
      1,
      1,
      2021,
      'Sulfitos',
      13.0,
      'El Ultreia Saint Jacques es uno de los mejores vinos del Bierzo y de toda España. Por muy poco dinero nos permite conocer el trabajo de un maestro como Raúl Pérez, descubrir la frutosidad y el frescor de la variedad mencía y adentrarnos en una denominación que el tiempo situará entre las más grandes, lugar que merece.',
      'https://cdn.vinissimus.com/img/unsafe/keep/plain/local:///prfmtgrande/vi/ultsj20_anv800_1662703943.png',
      0.75,
      null
    ),
    new Vino(
      2,
      'PSI 2021',
      39.95,
      2,
      1,
      2,
      2021,
      'Sulfitos',
      14.0,
      'Sin duda, un vino magnífico para adentrarse en el universo personal de Peter Sisseck, uno de los elaboradores que más ha hecho por la denominación ribereña en los últimos tiempos. Un vino con el que este gran enólogo busca ofrecer un perfil de vino más fresco y frutal, sin la concentración que caracteriza a sus codiciados Flor de Pingus y Pingus.',
      'https://cdn.vinissimus.com/img/unsafe/keep/plain/local:///prfmtgrande/vi/psiv21m_anv800.png',
      0.75,
      null
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onVinoSelected(vino: Vino) {
    this.vinoSelected.emit(vino);
  }

}
