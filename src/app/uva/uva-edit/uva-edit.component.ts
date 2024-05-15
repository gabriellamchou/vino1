import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Uva } from 'src/app/models/uva.model';
import { UvaService } from 'src/app/services/uva.service';

@Component({
  selector: 'app-uva-edit',
  templateUrl: './uva-edit.component.html',
  styleUrls: ['./uva-edit.component.css']
})
export class UvaEditComponent implements OnInit {
  @ViewChild('nombreInput') nombreInputRef!: ElementRef;
  @ViewChild('descInput') descInputRef!: ElementRef;

  constructor(
    private uvaService: UvaService
  ) { }

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
    this.uvaService.addUva(newUva);
  }
}
