import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vino = true;
  uva = false;

  onNavigation(ruta: string) {
    if (ruta === 'uvas') {
      this.vino = false;
      this.uva = true;
    } else {
      this.vino = true;
      this.uva = false;
    }
  }
  
}
