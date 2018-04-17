import { Component, OnInit } from '@angular/core';
import { SwaggerService } from './swagger.service';
import { Language } from './language';

@Component({
  selector: 'app-root',
  template: `
  <h1>Countries</h1>
  <ul>
  <li *ngFor="let language of _languages">
  {{language.name}}&nbsp;({{language.code}})
  </li>
  </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  _languages = new Array<Language>();

  constructor(private _swaggerService: SwaggerService) {}

  ngOnInit(){
    this._swaggerService.getLanguages().subscribe(
      res => { 
       this._languages = res; 
      },
      error => { console.log('an error occurred'); }
    )
  }
}
