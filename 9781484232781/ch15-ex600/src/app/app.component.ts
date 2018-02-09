import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: [],
  providers: [{ 
    provide: 'language', 
    useValue: 'en'
  }]  
})
export class AppComponent {
  title: string = '';
  constructor(private injector: Injector){
    this.title = 'Language is: ' + injector.get('language');
  }
}
