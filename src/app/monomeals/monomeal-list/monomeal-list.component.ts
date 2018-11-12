import { Component, OnInit } from '@angular/core';
import { Monomeal } from '../monomeal.model';
import { MonomealService } from '../monomeal.service';

@Component({
  selector: 'app-monomeal-list',
  templateUrl: './monomeal-list.component.html'
})
export class MonomealListComponent implements OnInit {
  monomeals: Monomeal[];


  constructor(private monomealService: MonomealService) { }

  ngOnInit() {

    this.monomeals = this.monomealService.getMonomeals();
  }

}
