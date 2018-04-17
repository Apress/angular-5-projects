import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Service {

  constructor(private _http: HttpClient) {
  }

  getPosts() : Observable<any> {
    return this._http.get("http://jsonplaceholder.typicode.com/postss");
  };

}
