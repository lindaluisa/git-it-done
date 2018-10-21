import { Component, OnInit, Input } from '@angular/core';

import { Monomeal } from '../monomeal.model';

@Component({
  selector: 'app-monomeal-detail',
  templateUrl: './monomeal-detail.component.html',
  styleUrls: ['./monomeal-detail.component.css']
})
export class MonomealDetailComponent implements OnInit {
  @Input() monomeal: Monomeal;
  constructor() { }

  ngOnInit() {
  }

}
