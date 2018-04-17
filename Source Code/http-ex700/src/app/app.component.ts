import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <h1>Post Title Names</h1>
    <p>{{_result|async}}</p>
  `,
  styles: []
})
export class AppComponent {
  _result: any;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this._result = 
      this._http.get<Array<any>>("http://jsonplaceholder.typicode.com/posts")
      .map(
        response => { 
          let titles = '';
          for (const responseItem of response){
            titles += responseItem['title'];
          }
          return titles;
        }
      );
  }
}
