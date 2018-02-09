import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Service {

  constructor(private _http: Http) {
  }

  getPosts() : Observable<any> {
    return this._http.get("http://jsonplaceholder.typicode.com/postss")
      .map(
        response => response.json()
      )
  };

}