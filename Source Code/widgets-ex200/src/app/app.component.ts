import { Component } from '@angular/core';
@Component({
selector: 'app-root',
template: `
  <mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>
`,
styles: []
})
export class AppComponent {
  title = 'app';
}
