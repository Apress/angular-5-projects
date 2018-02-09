import { Component, Input } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'car',
  template: `
    <p>
      {{car.make}} : {{car.model}}
    </p>
  `,
  styles: []
})
export class CarComponent {
  @Input('theCar') car: ICar;
}
