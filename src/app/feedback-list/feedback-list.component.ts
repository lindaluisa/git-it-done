import { Component, OnInit } from '@angular/core';

import { Wellbeing } from '../shared/wellbeing.model';
import { FeedbackListService } from './feedback-list.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  overallWellbeing: Wellbeing[];

  constructor(private feedbacklistService: FeedbackListService) { }

  ngOnInit() {
    this.overallWellbeing = this.feedbacklistService.getWellbeing();
  }

  onWellbeingAdded(wellbeing: Wellbeing) {
    this.overallWellbeing.push(wellbeing);
  }
}
