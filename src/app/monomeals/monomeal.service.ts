import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

import { Monomeal } from './monomeal.model';
import { Wellbeing } from '../shared/wellbeing.model';

import { FeedbackListService } from '../feedback-list/feedback-list.service';

@Injectable()
export class MonomealService  {
  monomealUpdated = new Subject<Monomeal[]>();


  private monomeals: Monomeal[] = [
      // tslint:disable-next-line:max-line-length
      new Monomeal('Strawberries', 'This is simply a berry test', 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Strawberry_fruit.jpg', 
      [
        new Wellbeing('Overall feeling', 8),
        new Wellbeing('Healthier skin', 10)
      ] ),
      // tslint:disable-next-line:max-line-length
      new Monomeal('Avocado', 'This is simply a avo test', 'https://c1.staticflickr.com/3/2888/33747255521_0afcc2ab36_b.jpg',
      [
        new Wellbeing('Overall feeling', 5),
        new Wellbeing('Healthier skin', 5)
      ] )
];

  constructor( private feedbackListService: FeedbackListService) {}

  setMonomeals(monomeals: Monomeal[]) {
    this.monomeals = monomeals;
    this.monomealUpdated.next(this.monomeals.slice());
  }

  getMonomeals() {
    return this.monomeals.slice();
  }

  getSingleMonomeal(id: number) {
    return this.monomeals[id];
  }

  addStatesToFeedbackList(states: Wellbeing[]) {
    this.feedbackListService.addStates(states);
  }

  addMonomeal(monomeal: Monomeal) {
    this.monomeals.push(monomeal);
    this.monomealUpdated.next(this.monomeals.slice());
  }

  updateMonomeal(index: number, newMonomeal: Monomeal) {
    this.monomeals[index] = newMonomeal;
    this.monomealUpdated.next(this.monomeals.slice());
  }

  deleteMonomeal(index: number) {
    this.monomeals.splice(index, 1);
    this.monomealUpdated.next(this.monomeals.slice());
  }
}

