import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Monomeal } from '../../monomeal.model';

@Component({
  selector: 'app-monomeal-item',
  templateUrl: './monomeal-item.component.html',
  styleUrls: ['./monomeal-item.component.css']
})
export class MonomealItemComponent implements OnInit {
  @Input() monomeal: Monomeal;
  @Output() monomealSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.monomealSelected.emit();
  }
}
