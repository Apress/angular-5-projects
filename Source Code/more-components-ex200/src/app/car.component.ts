import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'car',
  template: `
    <p>
      {{car.make}} : {{car.model}}
      <button (click)="delete(car)">Delete</button>
    </p>
  `,
  styles: []
})
export class CarComponent {
  @Input('theCar') car: ICar;
  @Output() carDelete = new EventEmitter();

  delete(car: ICar){
    this.carDelete.emit(car);
  }
}
