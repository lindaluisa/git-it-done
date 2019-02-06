import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '../../../../node_modules/@angular/forms';

import { MonomealService } from '../monomeal.service';

@Component({
  selector: 'app-monomeal-edit',
  templateUrl: './monomeal-edit.component.html',
  styleUrls: ['./monomeal-edit.component.scss']
})
export class MonomealEditComponent implements OnInit {
  id: number;
  editMode = false;
  monomealEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private monomealService: MonomealService) { }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            console.log(this.editMode);
            this.initForm();
          }
        );
  }

  onSubmit() {
    console.log(this.monomealEditForm);
  }

  private initForm() {
    let monomealName = '';
    let monomealImagePath = '';
    let monomealDescription = '';
    let monomealStates = new FormArray([]);

    if (this.editMode) {
      const monomealToEdit = this.monomealService.getSingleMonomeal(this.id);
      monomealName = monomealToEdit.name;
      monomealImagePath = monomealToEdit.imagePath;
      monomealDescription = monomealToEdit.description;
      if (monomealToEdit['wellbeings']) {
        for (let wellbeing of monomealToEdit.wellbeings) {
          monomealStates.push(
            new FormGroup({
              'name': new FormControl(wellbeing.name),
              'state': new FormControl(wellbeing.state)
            })
          );
        }
      }
    }
    this.monomealEditForm = new FormGroup({
      'name': new FormControl(monomealName),
      'imagePath': new FormControl(monomealImagePath),
      'description': new FormControl(monomealDescription),
      'wellbeings': monomealStates // is already FormArray (see above)
    });
  }

  getControls() {
    return (<FormArray>this.monomealEditForm.get('wellbeings')).controls;
  }
}
