import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>
  Foreground: <input [(ngModel)]="fg" />
  </p>
  <p>
  Background: <input [(ngModel)]="bg" />
  </p>
  <div [ngStyle]="{'color': fg, 'background-color': bg, 'padding': '5px'}">
  Test
  </div>
  `,
  styles: []
})
export class AppComponent {
  fg = "#ffffff";
  bg = "#000000";
}
