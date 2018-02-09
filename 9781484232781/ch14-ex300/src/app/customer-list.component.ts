import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  template: `
    <div class='customerList'>
    <p>
    [customer list]
    </p>
    <app-customer>
    </app-customer>
    <app-customer>
    </app-customer>
    <app-customer>
    </app-customer>
    </div>
  `,
  styles: ['.customerList {background-color:#80ced6;margin:10px;padding:10px;}']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

