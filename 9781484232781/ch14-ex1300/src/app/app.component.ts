import { Component, Input, DoCheck, IterableDiffers } from '@angular/core';

@Component({
  selector: 'numbers',
  template: `
  {{numbers}}
  <br/>
  <p *ngFor="let change of changes">
  {{change}}
  </p>
  `,
  styles: ['p{padding:0;margin:0}']
})
export class NumbersComponent implements DoCheck {
  @Input('numbers') numbersArray: Array<string>;
  changes: Array<string> = [];
  differ;

  constructor(private differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }

  ngDoCheck() {
    const differences = this.differ.diff(this.numbersArray);
    if (differences) {
      if (differences.forEachAddedItem) {
        differences.forEachAddedItem((item) => {
          if ((item) && (item.item)){
            this.changes.push('added ' + item.item);
          }
        });
      }
      if (differences.forEachRemovedItem) {
        differences.forEachRemovedItem((item) => {
          if ((item) && (item.item)){
            this.changes.push('removed ' + item.item);
          }
        });
      }
    }
  }
}

@Component({
  selector: 'app-root',
  template: `
  Enter Array (comma-separated): <input [(ngModel)]="numbers" (onModelChange)="onModelChange"/>
  <br/>
  <numbers [numbers]="numbers.split(',')"></numbers>
  `,
  styles: []
})
export class AppComponent {
  numbers = '';
}
