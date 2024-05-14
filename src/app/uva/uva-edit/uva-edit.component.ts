import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Uva } from 'src/app/models/uva.model';

@Component({
  selector: 'app-uva-edit',
  templateUrl: './uva-edit.component.html',
  styleUrls: ['./uva-edit.component.css']
})
export class UvaEditComponent implements OnInit {
  @Output() nuevaUva = new EventEmitter<Uva>();

  @ViewChild('nombreInput') nombreInputRef!: ElementRef;
  @ViewChild('descInput') descInputRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddUva() {
    const uvaNombre = this.nombreInputRef.nativeElement.value;
    const uvaDesc = this.descInputRef.nativeElement.value;
    const newUva = new Uva(
      null,
      uvaNombre,
      uvaDesc,
      null,
      null,
      null,
      null,
      null
    )
    this.nuevaUva.emit(newUva);
  }
}
