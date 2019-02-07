import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Monomeal } from '../monomeal.model';
import { MonomealService } from '../monomeal.service';

@Component({
  selector: 'app-monomeal-list',
  templateUrl: './monomeal-list.component.html'
})
export class MonomealListComponent implements OnInit {
  monomeals: Monomeal[];


  constructor(private monomealService: MonomealService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.monomealService.monomealUpdated
      .subscribe(
        (monomeals: Monomeal[]) => {
          this.monomeals = monomeals;
        });
      this.monomeals = this.monomealService.getMonomeals();
  }

  onNewMonomeal() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
