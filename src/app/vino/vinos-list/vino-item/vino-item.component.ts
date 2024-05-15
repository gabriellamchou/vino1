import { Component, Input, OnInit } from '@angular/core';
import { Vino } from 'src/app/models/vino.model';
import { VinoService } from 'src/app/services/vino.service';

@Component({
  selector: 'app-vino-item',
  templateUrl: './vino-item.component.html',
  styleUrls: ['./vino-item.component.css']
})
export class VinoItemComponent implements OnInit {
  @Input() vinoItem!: Vino;

  constructor(
    private vinoService: VinoService
  ) { }

  ngOnInit(): void {
  }

  onVinoClicked() {
    this.vinoService.vinoSelected.emit(this.vinoItem);
  }

}
