import { Wellbeing } from "../shared/wellbeing.model";
import { Subject } from "../../../node_modules/rxjs";

export class FeedbackListService {
  wellbeingUpdated = new Subject<Wellbeing[]>();
  startedEditing = new Subject<number>();

  private overallWellbeing: Wellbeing[] = [
      new Wellbeing('Strawberries', 8),
      new Wellbeing('Avocado', 9)
      ];

  getWellbeing() {
    return this.overallWellbeing.slice();
  }

  getWellbeingState(index: number) {
    return this.overallWellbeing[index];
  }

  addWellbeing(wellbeing: Wellbeing) {
    this.overallWellbeing.push(wellbeing);
    this.wellbeingUpdated.next(this.overallWellbeing.slice());
  }

  addStates(states: Wellbeing[]) {
 /* for (let state of states) {
      this.addWellbeing(state);
    } */
    this.overallWellbeing.push(...states);
    this.wellbeingUpdated.next(this.overallWellbeing.slice());
  }

  updateState(index: number, newState: Wellbeing) {
    this.overallWellbeing[index] = newState;
    this.wellbeingUpdated.next(this.overallWellbeing.slice());
  }

  deleteWellbeing(index: number) {
    this.overallWellbeing.splice(index, 1);
    this.wellbeingUpdated.next(this.overallWellbeing.slice());
  }
}

