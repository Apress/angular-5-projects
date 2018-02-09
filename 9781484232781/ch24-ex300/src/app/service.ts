import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class Service {
    constructor(private _http: Http){}

    search(search) {
        const mashapeKey = 'OxWYjpdztcmsheZU9AWLNQcE9g9wp1qdRkFjsneaEp2Yf68nYH';
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');    
        headers.append('X-Mashape-Key', mashapeKey);
        const options = new RequestOptions({ headers: headers });

        // concatenated string
        const concatenatedUrl: string = 
            "https://trailapi-trailapi.p.mashape.com?q[city_cont]=" +
            encodeURIComponent(search);
        return this._http.get(concatenatedUrl, options);
    }
}