import { Component } from '@angular/core';
import { Monomeal } from './monomeals/monomeal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadedFeature = 'monomeal';
  selectedMonomeal: Monomeal;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
