import { Component, OnInit, Input } from '@angular/core';

import { Monomeal } from '../monomeal.model';
import { MonomealService } from '../monomeal.service';

@Component({
  selector: 'app-monomeal-detail',
  templateUrl: './monomeal-detail.component.html'
})
export class MonomealDetailComponent implements OnInit {
  @Input() monomeal: Monomeal;

  constructor(private monomealService: MonomealService) { }

  ngOnInit() {
  }


  onAddToFeedbackList() {
    this.monomealService.addStatesToFeedbackList(this.monomeal.wellbeings);
  }
}
