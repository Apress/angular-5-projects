import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
  `,
  styles: ['h1 { color: red }'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = 'app';
}
