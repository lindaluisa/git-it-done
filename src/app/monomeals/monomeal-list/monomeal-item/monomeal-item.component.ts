import { Component, OnInit, Input } from '@angular/core';

import { Monomeal } from '../../monomeal.model';

@Component({
  selector: 'app-monomeal-item',
  templateUrl: './monomeal-item.component.html'
})
export class MonomealItemComponent implements OnInit {
  @Input() monomeal: Monomeal;
  @Input() index: number;


  ngOnInit() {
  }
}
