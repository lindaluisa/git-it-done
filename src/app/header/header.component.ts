import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';



@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
 @Output() featureSelected = new EventEmitter<string>();


  onSelect(feature: string) { // string received when method is called
    this.featureSelected.emit(feature);
  }

}
