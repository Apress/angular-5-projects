import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  template: `
    <div class='customer'(click)="onClicked()">
      {{customer.name}} | {{customer.city}}
    </div>
  `,
  styles: ['.customer {background-color:#fefbd8;margin:10px;padding:10px}']
})
export class CustomerComponent implements OnInit {

  @Input() customer;
  @Output() clicked: EventEmitter<String> = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onClicked(){
    this.clicked.emit(this.customer.name);
  }

}
