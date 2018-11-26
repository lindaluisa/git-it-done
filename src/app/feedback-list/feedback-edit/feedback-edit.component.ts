import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Wellbeing } from '../../shared/wellbeing.model';

@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})

export class FeedbackEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

  constructor() { }
  ngOnInit() {
  }

  onAddState() {
    const wellbeingName = this.nameInputRef.nativeElement.value;
    const stateAmount = this.amountInputRef.nativeElement.value;
    const newWellbeing = new Wellbeing(wellbeingName, stateAmount);
  }


}
