import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Doesnt work:</h1>
  <img src="starUrl">
  <h1>Works:</h1>
  <img [src]="starUrl">
  `,
  styles: []
})
export class AppComponent {
  starUrl = 'https://developer.mozilla.org/samples/cssref/images/starsolid.gif';
}
