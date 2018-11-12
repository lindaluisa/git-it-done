import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { Monomeal } from '../../monomeal.model';
import { MonomealService } from '../../monomeal.service';

@Component({
  selector: 'app-monomeal-item',
  templateUrl: './monomeal-item.component.html'
})
export class MonomealItemComponent implements OnInit {
  @Input() monomeal: Monomeal;
/*   @Output() monomealSelected = new EventEmitter<void>();*/

  constructor(private monomealService: MonomealService) { }

  ngOnInit() {
  }

  onSelected() {
    this.monomealService.monomealSelected.emit(this.monomeal);
  }
}
