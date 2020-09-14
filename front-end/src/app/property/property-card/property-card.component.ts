import { Component, Input } from '@angular/core';
import { property } from '../property.interface';


@Component(
  {
    selector: 'app-property-card',
    // template: `<h1>I am a sw engineer</h1>`,
    templateUrl: 'property-card.component.html',
    // styles: ['h1 {font-weight: normal;}']
     styleUrls: ['property-card.component.css']
  }
)

export class PropertyComponent {
@Input() property: property
}
