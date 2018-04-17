import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{count}}
  </h1>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy{
  interval;
  count = 0;

  ngOnInit(){
    this.interval = setInterval(() => {
      this.count++;
    })
  }
  
  ngOnDestroy(){
    clearInterval(this.interval);    
    delete this.interval;
  }
}
