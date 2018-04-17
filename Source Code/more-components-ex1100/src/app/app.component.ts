import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'name',
  template: `
  <p *ngFor="let change of changes">
  {{change}}
  </p>
  `,
  styles: []
})
export class NameComponent implements OnChanges{
  @Input('name') nm;
  changes: Array<string> = [''];

  ngOnChanges(changes: SimpleChanges){
    this.changes.push(JSON.stringify(changes));
  }
}

@Component({
  selector: 'app-root',
  template: `
  Change this field: <input [(ngModel)]="name" />
  <hr/>
  History
  <name [name]="name"></name>
  `,
  styles: []
})
export class AppComponent{
  name: string = '';
}
