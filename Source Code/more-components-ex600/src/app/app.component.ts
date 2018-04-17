import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 #title></h1>
  The title is {{title.innerHTML}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  @ViewChild('title') title: ElementRef;

  ngAfterViewInit(){
    this.title.nativeElement.innerHTML = 'app works differently!'
  }
}
