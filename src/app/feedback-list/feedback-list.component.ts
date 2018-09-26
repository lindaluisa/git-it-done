import { Component, OnInit } from '@angular/core';

import { Wellbeing } from '../shared/wellbeing.model';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  overallWellbeing: Wellbeing[] = [
    new Wellbeing('Strawberries', 8),
    new Wellbeing('Avocado', 9)
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
