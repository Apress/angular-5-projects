import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class Service {
constructor(private _http: HttpClient){}
search(search) {
  const concatenatedUrl: string = 
    "https://trailapi-trailapi.p.mashape.com?q[city_cont]=" +
    encodeURIComponent(search);
  const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
  const httpHeaders: HttpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json',
   'X-Mashape-Key': mashapeKey});
  return this._http
    .get<any>(concatenatedUrl, { headers: httpHeaders })
    .map(res => { 
      // return the first place.
      if ((res) && (res['places']) && (res['places'].length) && (res['places'].length > 0)){
        return res['places'][0];
      }else{
        return undefined;
      }
     })
     .catch(err => {
       console.log('errror *************')
       return undefined;
     });
  }
}
