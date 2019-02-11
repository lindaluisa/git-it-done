import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { MonomealService } from '../monomeals/monomeal.service';
import { Monomeal } from '../monomeals/monomeal.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private mmService: MonomealService) {}

// .json is the firebase way
  storeMonomeals() {
    return this.http.put('https://monomeals.firebaseio.com/monomeals.json', this.mmService.getMonomeals());
  }

  getMonomeals() {
    return this.http.get('https://monomeals.firebaseio.com/monomeals.json')
      .map(
        (response: Response) => {
          const monomeals: Monomeal[] = response.json();
          for (let monomeal of monomeals) {
            if (!monomeal['wellbeings']) {
              console.log(monomeal);
              monomeal['wellbeings'] = [];
            }
          }
          return monomeals;
        }
      )
      .subscribe(
        (monomeals: Monomeal[]) => {
          this.mmService.setMonomeals(monomeals);
        }
      );
  }


}
