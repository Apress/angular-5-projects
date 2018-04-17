import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{counter}}
    </h1>
    <button (click)="incrementCounter()">Increment Counter</button>
  `,
  styles: []
})
export class AppComponent {
  counter = 0;

  incrementCounter(){
    this.counter++;
  }
}
