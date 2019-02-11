import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MonomealsComponent } from './monomeals/monomeals.component';
import { MonomealListComponent } from './monomeals/monomeal-list/monomeal-list.component';
import { MonomealDetailComponent } from './monomeals/monomeal-detail/monomeal-detail.component';
import { MonomealItemComponent } from './monomeals/monomeal-list/monomeal-item/monomeal-item.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackEditComponent } from './feedback-list/feedback-edit/feedback-edit.component';

import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { FeedbackListService } from './feedback-list/feedback-list.service';
import { MonomealService } from './monomeals/monomeal.service';
import { DataStorageService } from './shared/data-storage.service';

import { AppRoutingModule } from './app-routing.module';
import { MonomealStartComponent } from './monomeals/monomeal-start/monomeal-start.component';
import { MonomealEditComponent } from './monomeals/monomeal-edit/monomeal-edit.component';
import { HttpModule } from '../../node_modules/@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MonomealsComponent,
    MonomealListComponent,
    MonomealDetailComponent,
    MonomealItemComponent,
    FeedbackListComponent,
    FeedbackEditComponent,
    DropdownDirective,
    MonomealStartComponent,
    MonomealEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FeedbackListService, MonomealService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
