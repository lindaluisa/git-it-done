import { Component, OnInit } from '@angular/core';
import { Monomeal } from './monomeal.model';

@Component({
  selector: 'app-monomeals',
  templateUrl: './monomeals.component.html'
})
export class MonomealsComponent implements OnInit {
  selectedMonomeal: Monomeal;

  constructor() { }

  ngOnInit() {
  }

}
