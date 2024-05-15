import { EventEmitter, Injectable } from '@angular/core';
import { Vino } from '../models/vino.model';
import { Uva } from '../models/uva.model';

@Injectable({
  providedIn: 'root'
})
export class VinoService {

  constructor() { }

  private listaVinos: Vino[] = [
    new Vino(
      1,
      'Ultreia Saint Jacques 2021',
      'El Ultreia Saint Jacques es uno de los mejores vinos del Bierzo y de toda España. Por muy poco dinero nos permite conocer el trabajo de un maestro como Raúl Pérez, descubrir la frutosidad y el frescor de la variedad mencía y adentrarnos en una denominación que el tiempo situará entre las más grandes, lugar que merece.',
      'https://cdn.vinissimus.com/img/unsafe/keep/plain/local:///prfmtgrande/vi/ultsj20_anv800_1662703943.png',
      [
        new Uva(14, 'Mencía', 'Guapísima', null, null, null, null, null),
        new Uva(14, 'Monastrell', 'Guapa, pero no tanto', null, null, null, null, null)
      ]
    ),
    new Vino(
      2,
      'PSI 2021',
      'Sin duda, un vino magnífico para adentrarse en el universo personal de Peter Sisseck, uno de los elaboradores que más ha hecho por la denominación ribereña en los últimos tiempos. Un vino con el que este gran enólogo busca ofrecer un perfil de vino más fresco y frutal, sin la concentración que caracteriza a sus codiciados Flor de Pingus y Pingus.',
      'https://cdn.vinissimus.com/img/unsafe/keep/plain/local:///prfmtgrande/vi/psiv21m_anv800.png',
      [
        new Uva(14, 'Obsidiana', 'Muy dura', null, null, null, null, null),
        new Uva(14, 'Serpentina', 'Ta bien', null, null, null, null, null)
      ]
    )
  ];

  getListaVinos() {
    return this.listaVinos.slice();
  }

  vinoSelected = new EventEmitter<Vino>();
}
