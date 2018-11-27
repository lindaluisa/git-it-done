import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-monomeal-edit',
  templateUrl: './monomeal-edit.component.html',
  styleUrls: ['./monomeal-edit.component.scss']
})
export class MonomealEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            console.log(this.editMode);          
          }
        );
  }

}
