import { Injectable } from '@angular/core';

import { Monomeal } from './monomeal.model';
import { Wellbeing } from '../shared/wellbeing.model';

import { FeedbackListService } from '../feedback-list/feedback-list.service';

@Injectable()
export class MonomealService  {
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

  getMonomeals() {
    return this.monomeals.slice();
  }

  getMonomeal(id: number) {
    return this.monomeals[id]
  }

  addStatesToFeedbackList(states: Wellbeing[]) {
    this.feedbackListService.addStates(states);
  }
}