import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonomealsComponent } from './monomeals/monomeals.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/monomeals', pathMatch: 'full'},
  { path: 'monomeals', component: MonomealsComponent},
  { path: 'feedback', component: FeedbackListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
