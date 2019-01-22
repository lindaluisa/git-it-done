import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Wellbeing } from '../../shared/wellbeing.model';
import { FeedbackListService } from '../feedback-list.service';

@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})

export class FeedbackEditComponent implements OnInit {

  constructor(private feedbacklistService: FeedbackListService) { }

  ngOnInit() {
  }

  onAddState(form: NgForm) {
    const value = form.value;
    const newWellbeing = new Wellbeing(value.name, value.state);
    this.feedbacklistService.addWellbeing(newWellbeing);
  }

}
