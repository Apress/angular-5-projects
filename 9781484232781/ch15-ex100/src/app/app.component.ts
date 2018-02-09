import { Component, OnInit, Input } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'car',
  template: `
  <h3>
    {{name}} Is Supercharged: {{supercharged}}
  </h3>
  `,
  styles: [],
  providers: [CarService]
})
export class CarComponent implements OnInit{
  @Input() name;
  supercharged: string = '';
  constructor(private service: CarService){}
  ngOnInit(){
    this.supercharged = this.service.isSuperCharged(this.name);
  }
}

@Component({
  selector: 'app-root',
  template: `
  <car name="Ford GT"></car>
  <car name="Corvette Z06"></car>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
}
