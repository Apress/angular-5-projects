import { Component } from '@angular/core';
import { ICar } from './icar';

@Component({
  selector: 'app-root',
  template: `
  <car *ngFor="let car of cars" (carDelete)="deleteCar(car)" [theCar]="car">
  </car>
  `,
  styles: []
})

export class AppComponent {
  cars:Array<ICar> = [
    {make: 'bmw', model: 'm3'},
    {make: 'porsche', model: '911'},
    {make: 'ford', model: 'mustang'}    
  ];

  deleteCar(car: ICar){
    alert('Deleting car:' + JSON.stringify(car));
  }
}
