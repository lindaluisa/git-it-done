import { 
  Component, 
  OnInit, 
  OnDestroy,
  ViewChild } from '@angular/core';
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
  @ViewChild('f') fbForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Wellbeing;

  constructor(private feedbacklistService: FeedbackListService) { }

  ngOnInit() {
    this.feedbacklistService.startedEditing
      .subscribe(
        (index:number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.feedbacklistService.getWellbeingState(index);
          this.fbForm.setValue({
            name: this.editedItem.name,
            state: this.editedItem.state
          })
        }
      );
  }

  onUpdateOrAddState(form: NgForm) {
    const value = form.value;
    const newWellbeing = new Wellbeing(value.name, value.state);
    if (this.editMode) {
      this.feedbacklistService.updateState(this.editedItemIndex, newWellbeing);
    } else {
      this.feedbacklistService.addWellbeing(newWellbeing);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
