import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vino } from 'src/app/models/vino.model';

@Component({
  selector: 'app-vino-item',
  templateUrl: './vino-item.component.html',
  styleUrls: ['./vino-item.component.css']
})
export class VinoItemComponent implements OnInit {
  @Input() vinoItem!: Vino;

  @Output() vinoSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onVinoClicked() {
    this.vinoSelected.emit();
  }

}
