import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="_search" placeholder="city">
    <button (click)="doSearchConcatenatedUrl()">Search (Concatenated URL)</button>
    <button (click)="doSeachHttpParams1()">Search (Http Params1)</button>
    <button (click)="doSeachHttpParams2()">Search (Http Params2)</button>
    <p>JSON {{_result | json}}</p>
  `,
  styles: []
})
export class AppComponent {
  _search = 'Atlanta';
  _result = {};

  constructor(private _http: HttpClient){
  }

  doSearchConcatenatedUrl(){
    const concatenatedUrl: string = 
      "https://trailapi-trailapi.p.mashape.com?q[city_cont]=" +
      encodeURIComponent(this._search);
    const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const httpHeaders: HttpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json',
     'X-Mashape-Key': mashapeKey});
    this._http.get(concatenatedUrl, { headers: httpHeaders }).subscribe(
      res => { this._result = res; });
  }

  doSeachHttpParams1(){
    const url: string = 
      'https://trailapi-trailapi.p.mashape.com';
    const mashapeKey = 
      'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json',
      'X-Mashape-Key': mashapeKey}); 
    const params = new HttpParams({
      fromString: 'q[city_cont]=' + this._search;
    });
    this._http.get(url, {headers: httpHeaders, params: params}).subscribe(
        res => { this._result = res; });
  }

  doSeachHttpParams2(){
    const url: string = 
      'https://trailapi-trailapi.p.mashape.com';
    const mashapeKey = 
      'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json',
      'X-Mashape-Key': mashapeKey}); 
    const params = new HttpParams().set('q[city_cont]', this._search);
    this._http.get(url, {headers: httpHeaders, params: params}).subscribe(
        res => { this._result = res; });
  }
}
