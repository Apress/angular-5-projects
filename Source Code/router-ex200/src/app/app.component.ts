import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'pepperoni',
  template: `
    <div>
      <h2>Pepperoni</h2>
      <img src="https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg">
    </div>
  `,
  styles: []
})
export class PepperoniComponent {
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        Delivery Menu
      </h1>
      <a [routerLink]="['pepperoni']" routerLinkActive="router-link-active">Pepperoni Pizza</a>
      <a [routerLink]="['other']" routerLinkActive="router-link-active">Other Menu Items</a>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
