import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  @Input() car;

  ngOnInit() {
  }

}
