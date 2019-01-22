import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Wellbeing } from '../../shared/wellbeing.model';
import { FeedbackListService } from '../feedback-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})

export class FeedbackEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private feedbacklistService: FeedbackListService) { }

  ngOnInit() {
    this.feedbacklistService.startedEditing
      .subscribe(
        (index:number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        }
      );
  }

  onAddState(form: NgForm) {
    const value = form.value;
    const newWellbeing = new Wellbeing(value.name, value.state);
    this.feedbacklistService.addWellbeing(newWellbeing);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
