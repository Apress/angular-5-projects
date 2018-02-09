import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'component1',
  template: `
    <h1>
      {{title}}
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class Component1 {
  title = 'Component 1';
}

@Component({
  selector: 'component2',
  template: `
    <h1>
      {{title}}
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class Component2 {
  title = 'Component 2';
}

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <button (click)="component1()">Component 1</button>
    <button (click)="component2()">Component 1</button>
    <button (click)="back()"><- Back</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'App Component';
  constructor(private router: Router, private location: Location){}
  component1(){
    this.router.navigate(['component1']).then(result => { console.log("navigation result: " + result)});
  }
  component2(){
    this.router.navigateByUrl("/component2");
  }
  back(){
    this.location.back();
  }
}
