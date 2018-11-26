import { Wellbeing } from "../shared/wellbeing.model";

export class FeedbackListService {
  private overallWellbeing: Wellbeing[] = [
      new Wellbeing('Strawberries', 8),
      new Wellbeing('Avocado', 9)
      ];
      
  getWellbeing() {
    return this.overallWellbeing.slice();
  }

  addWellbeing(wellbeing) {
    this.overallWellbeing.push(wellbeing);
  }
}