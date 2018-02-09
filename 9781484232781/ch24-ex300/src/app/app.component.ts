import { Component } from '@angular/core';
import { Service } from './service';
import { FormsModule } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
    <h2>Trail Finder</h2>
    <input [(ngModel)]="_search" placeholder="city">
    <button (click)="doSearch()">Find Me a Trail</button>
    <div id="notFound" class="notFound" *ngIf="_searched && !_result">
      We could not find a trail here. :(
    </div>
    <div class="found" *ngIf="_searched && _result">
    <p id="name">Name: {{_result?.name}}</p>
    <p id="state">State: {{_result?.state}}</p>
    <p id="directions">Directions: {{_result?.directions}}</p>
    <p>Activities:</p>
    <ul id="activities" *ngIf="_result?.activities">
      <li *ngFor="let activity of _result.activities">
        {{activity.activity_type_name}} {{activity.description}}
      </li>
    </ul>
  `,
  styles: [`.found {
    border: 1px solid black;
    background-color: #8be591;
    color: black;
    margin: 10px;
    padding: 10px;
  }`,
  `.notFound {
    border: 1px solid black;
    background-color: #d13449;
    color: white;
    margin: 10px;
    padding: 10px;
  }`]
})
export class AppComponent {
  _search = 'Atlanta';
  _searched = false;
  _result = '';

  constructor(private _service: Service) {
  }
  
  doSearch() {
    this._service.search(this._search).subscribe(
      res => {
        const obj = res.json();
        if ((obj) && (obj.places) && (obj.places.length) && (obj.places.length > 0)){
          this._result = obj.places[0];
        }else{
          this._result = undefined;
        }
      }, 
      err => {
        console.log(err);
      },
      () => {
          this._searched = true;
      }
    );
  }
}
