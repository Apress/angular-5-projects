import { Component, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p #paragraph1>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
  <p #paragraph2>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
  <p *ngIf="note">{{note}}</p>
  `,
  styles: ['p { background-color: #FFE5CC; padding: 15px; text-align: center}']
})
export class AppComponent implements AfterViewInit{
  @ViewChildren('paragraph1, paragraph2') paragraphs;
  note: string = '';

  ngAfterViewInit(){
    setTimeout(_ => this.note = 'Number of Paragraphs:' + this.paragraphs.length);
  }
}
