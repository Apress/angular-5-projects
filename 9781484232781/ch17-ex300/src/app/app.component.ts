import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './customerService';
import { Customer } from './customer';

@Component({
  selector: 'pleaseSelect',
  template: `
    <div>
    <h2>Please make a selection.</h2>
    </div>
  `,
  styles: ['div { background-color: #FFFFFF; padding: 10px; border: 1px solid #000000 }']
})
export class PleaseSelectComponent {
}

@Component({
  selector: 'detail',
  template: `
    <div>
    <h2>Customer Detail {{id}}</h2>
    <p>{{customer.name}}<p>
    <p>{{customer.city}}, {{customer.state}}</p>
    <p>Balance: &#36;{{customer.balance}}</p>
    </div>
  `,
  styles: ['div { background-color: #FFE4E1 }']
})
export class DetailComponent {
  customer: Customer;
  constructor(
    private customerService: CustomerService, 
    private route: ActivatedRoute) {
      route.queryParams.subscribe(
        (queryParams: Object) => 
        this.customer = customerService.getCustomerById(queryParams['id']));
  }
}

@Component({
  selector: 'app-root',
  template: `
    <div>
    <h1>
      Customer List
    </h1>
    <p *ngFor="let customer of _customerService.customers">
      <a [routerLink]="['detail']" [queryParams]="{id: customer.id}" routerLinkActive="active">{{customer.name}}</a>
    </p>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: ['div { background-color: #faebd7 }',]
})
export class AppComponent {
  constructor(private _customerService: CustomerService){
  }
}
