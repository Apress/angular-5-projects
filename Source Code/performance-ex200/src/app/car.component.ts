import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {

  constructor() { }

  @Input() car;

  ngOnInit() {
  }

}
