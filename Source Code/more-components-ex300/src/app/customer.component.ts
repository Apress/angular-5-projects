import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  template: `
    <div class='customer'>
      [customer]
    </div>
  `,
  styles: ['.customer {background-color:#fefbd8;margin:10px;padding:10px}']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
