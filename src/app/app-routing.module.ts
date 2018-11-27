import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonomealsComponent } from './monomeals/monomeals.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { MonomealStartComponent } from './monomeals/monomeal-start/monomeal-start.component';
import { MonomealDetailComponent } from './monomeals/monomeal-detail/monomeal-detail.component';
import { MonomealEditComponent } from './monomeals/monomeal-edit/monomeal-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/monomeals', pathMatch: 'full'},
  { path: 'monomeals', component: MonomealsComponent, children: [
      { path: '', component: MonomealStartComponent },
      { path: 'new', component: MonomealEditComponent },
      { path: ':id', component: MonomealDetailComponent },
      { path: ':id/edit', component: MonomealEditComponent }
  ] },
  { path: 'feedback', component: FeedbackListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
