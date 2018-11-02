import { Component, OnInit, Input } from '@angular/core';

import { Monomeal } from '../monomeal.model';

@Component({
  selector: 'app-monomeal-detail',
  templateUrl: './monomeal-detail.component.html'
})
export class MonomealDetailComponent implements OnInit {
  @Input() monomeal: Monomeal;
  constructor() { }

  ngOnInit() {
  }

}
