import { Wellbeing } from "../shared/wellbeing.model";
import { Subject } from "../../../node_modules/rxjs";

export class FeedbackListService {
  updatedWellbeing = new Subject<Wellbeing[]>();

  private overallWellbeing: Wellbeing[] = [
      new Wellbeing('Strawberries', 8),
      new Wellbeing('Avocado', 9)
      ];
      
  getWellbeing() {
    return this.overallWellbeing.slice();
  }

  addWellbeing(wellbeing: Wellbeing) {
    this.overallWellbeing.push(wellbeing);
    this.updatedWellbeing.next(this.overallWellbeing.slice());
  }

  addStates(states: Wellbeing[]) {
 /* for (let state of states) {
      this.addWellbeing(state);
    } */
    this.overallWellbeing.push(...states);
    this.updatedWellbeing.next(this.overallWellbeing.slice());
  }
}

