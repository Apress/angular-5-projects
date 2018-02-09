import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      Lowercase: {{ "The Quick Brown Fox Jumped Over The Lazy Dogs" | lowercase }}
    </p>
    <p>
      Uppercase: {{ "The Quick Brown Fox Jumped Over The Lazy Dogs" | uppercase }}
    </p>
    <p>
      Currency: {{ 2012.55 | currency }}
    </p>
    <p>
      UK Pound Currency: {{ 2012.55 | currency: 'gbp':true }}
    </p>
    <p>
      Percentage: {{ 0.5 | percent }}
    </p>
    <p>
      Date: {{ dt | date }}
    </p>
    <p>
      Short Date: {{ dt | date:shortdate }}
    </p>
    <p>
      Special Date Format: {{ dt | date:'yMMMMEEEEd' }}
    </p>
  `,
  styles: []
})
export class AppComponent {
  dt = new Date();
}
