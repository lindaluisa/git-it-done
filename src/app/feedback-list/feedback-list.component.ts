import { Component, OnInit, OnDestroy } from '@angular/core';

import { Wellbeing } from '../shared/wellbeing.model';
import { FeedbackListService } from './feedback-list.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit, OnDestroy {
  overallWellbeing: Wellbeing[];
  private subscription: Subscription;

  constructor(private feedbacklistService: FeedbackListService) { }

  ngOnInit() {
    this.overallWellbeing = this.feedbacklistService.getWellbeing();
    this.subscription = this.feedbacklistService.updatedWellbeing
      .subscribe(
        (wellbeing: Wellbeing[]) => {
          this.overallWellbeing = wellbeing;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
