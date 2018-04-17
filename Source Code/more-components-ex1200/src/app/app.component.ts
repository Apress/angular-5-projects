import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p *ngFor="let log of logs">
  {{log}}
  </p>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  logs: Array<string> = [ new Date()+''];

  constructor(){
    for (let i=0;i<1000;i++){
      console.log(i);
    }
  }

  ngOnInit(){
    this.logs.push(new Date()+'');
  }
}
