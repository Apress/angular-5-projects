import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'pepperoni',
  template: `
    <h2>Pepperoni</h2>
    <img src="https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg">
  `,
  styles: []
})
export class PepperoniComponent {
}

@Component({
  selector: 'everything',
  template: `
    <h2>Everything</h2>
    Size:{{size}}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UXyx2jQrCBBBw2N4ofFVw2oWz7keZjDVUB4UDrASE9JHwQdi">
  `,
  styles: []
})
export class EverythingComponent {  
  private size: String = '';
  constructor(private route: ActivatedRoute){
    route.params.subscribe(
      (params: Object) => 
      this.size = params['size']);
  }
}

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Pizzas
    </h1>
    <a [routerLink]="['pepperoni']">Pepperoni</a>
    <a [routerLink]="['everything','small']">Everything Small</a>
    <a [routerLink]="['everything','large']">Everything Large</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
