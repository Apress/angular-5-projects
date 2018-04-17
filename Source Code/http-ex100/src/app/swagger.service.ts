import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Language } from './language';

@Injectable()
export class SwaggerService {
    constructor(private _http: HttpClient){}

    getLanguages() {
        return this._http.get<Array<Language>>('https://languagetool.org/api/v2/languages');
    }
}
