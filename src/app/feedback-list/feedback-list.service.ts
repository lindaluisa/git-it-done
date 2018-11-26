import { Wellbeing } from "../shared/wellbeing.model";
import { EventEmitter } from "@angular/core";

export class FeedbackListService {
  updatedWellbeing = new EventEmitter<Wellbeing[]>();

  private overallWellbeing: Wellbeing[] = [
      new Wellbeing('Strawberries', 8),
      new Wellbeing('Avocado', 9)
      ];
      
  getWellbeing() {
    return this.overallWellbeing.slice();
  }

  addWellbeing(wellbeing: Wellbeing) {
    this.overallWellbeing.push(wellbeing);
    this.updatedWellbeing.emit(this.overallWellbeing.slice());
  }
}