import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { MonomealService } from '../monomeal.service';

@Component({
  selector: 'app-monomeal-edit',
  templateUrl: './monomeal-edit.component.html'
})
export class MonomealEditComponent implements OnInit {
  id: number;
  editMode = false;
  monomealEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private monomealService: MonomealService,
              private router: Router) { }

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
    // const newMonomeal = new Monomeal(
    //   this.monomealEditForm.value['name'],
    //   this.monomealEditForm.value['description'],
    //   this.monomealEditForm.value['imagePath'],
    //   this.monomealEditForm.value['wellbeings']);
    //   and then passing newMonomeal as second parameter
    if (this.editMode) {
      this.monomealService.updateMonomeal(this.id, this.monomealEditForm.value);
    } else {
      this.monomealService.addMonomeal(this.monomealEditForm.value);
    }
    this.onCancel(); // fn navigates away
  }

  onAddState() {
    (<FormArray>this.monomealEditForm.get('wellbeings')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'state': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteState(index: number) {
    (<FormArray>this.monomealEditForm.get('wellbeings')).removeAt(index);
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
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
              'name': new FormControl(wellbeing.name, Validators.required),
              'state': new FormControl(wellbeing.state, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.monomealEditForm = new FormGroup({
      'name': new FormControl(monomealName, Validators.required),
      'imagePath': new FormControl(monomealImagePath, Validators.required),
      'description': new FormControl(monomealDescription, Validators.required),
      'wellbeings': monomealStates // is already FormArray (see above)
    });
  }

  getControls() {
    return (<FormArray>this.monomealEditForm.get('wellbeings')).controls;
  }
}
