import { Component, OnInit } from '@angular/core';

import { MonomealService } from './monomeal.service';

@Component({
  selector: 'app-monomeals',
  templateUrl: './monomeals.component.html',
  providers: [MonomealService]
})
export class MonomealsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
