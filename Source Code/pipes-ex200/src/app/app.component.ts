import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
@Component({
  selector: 'app-root',
  template: `
    <p>My name is {{name | reverse}}
    <p>My name is {{name | reverse:5}}
  `,
  styles: []
})
export class AppComponent {
  name: string = 'Michael Caine';
}
