import { Injectable } from '../../../node_modules/@angular/core';
import { Http, Response } from '@angular/http';

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
      .subscribe(
        (response: Response) => {
          const monomeals: Monomeal[] = response.json();
          this.mmService.setMonomeals(monomeals);
        }
      );
  }


}
