import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Monomeal } from '../monomeal.model';
import { MonomealService } from '../monomeal.service';

@Component({
  selector: 'app-monomeal-detail',
  templateUrl: './monomeal-detail.component.html'
})
export class MonomealDetailComponent implements OnInit {
  monomeal: Monomeal;
  id: number;

  constructor(private monomealService: MonomealService,
              private route: ActivatedRoute) { }

  ngOnInit() {
/*     const id = this.route.snapshot.params['id']; would work only for the first the detail cmp is loaded */
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']; // the upfront + force it into a number
          this.monomeal = this.monomealService.getMonomeal(this.id);
        }
      )
}


  onAddToFeedbackList() {
    this.monomealService.addStatesToFeedbackList(this.monomeal.wellbeings);
  }
}
