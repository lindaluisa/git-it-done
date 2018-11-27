import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Monomeal } from '../monomeal.model';
import { MonomealService } from '../monomeal.service';

@Component({
  selector: 'app-monomeal-detail',
  templateUrl: './monomeal-detail.component.html'
})
export class MonomealDetailComponent implements OnInit {
  monomeal: Monomeal;

  constructor(private monomealService: MonomealService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }


  onAddToFeedbackList() {
    this.monomealService.addStatesToFeedbackList(this.monomeal.wellbeings);
  }
}
