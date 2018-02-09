import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-root',
  template: `
      <div>
      Title:
      <br/>
      <input type="text" [(ngModel)]="_title" size="50" />
      <br/>
      <br/>
      Body:
      <br/>
      <textarea [(ngModel)]='_body' rows="2" cols="50">                             
      </textarea>
      <br/>
      <button (click)="onAdd()">Add</button>
      </div>
      <p><b>You Added:</b></p>
      <p *ngIf="_added.length == 0">None</p>
      <p *ngFor="let added of _added">
        {{added.title}}
      </p>
    `,
  styles: ['div { padding: 20px; background-color: #C0C0C0 }']
})
export class AppComponent {
  _title: string;
  _body: string;
  _added: Array<any> = new Array<any>();

  constructor(private _http: Http) {
  }
  
  onAdd(){
    const requestBody = {
      title: this._title || '[Unspecified]',
      body: this._body || '[Unspecified]',
    };
    this._http.post("http://jsonplaceholder.typicode.com/posts", requestBody).subscribe(
      res => {
        this._added.push(res.json());
      }
    )
  }
}
