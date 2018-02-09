import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SwaggerService {
    constructor(private _http: Http){}

    getLanguages() {
        return this._http.get('https://languagetool.org/api/v2/languages');
    }
}