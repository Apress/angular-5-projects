import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable()
export class CustomerService {
  private _customers: Array<Customer> = [
      new Customer(1, 'Mark', 'Atlanta', 'GA', 12000),
      new Customer(2, 'Peter', 'Belvue', 'CA', 5000),
      new Customer(3,'Jill', 'Colombia', 'SC', 2000),
      new Customer(4, 'Brian', 'Augusta', 'GA', 2000)      
  ];

  get customers() {
    return this._customers;
  }

  getCustomerById(id: number){
    for (let i=0,ii=this._customers.length;i<ii;i++){
      const customer = this._customers[i];
      if (customer.id == id){
        return customer;
      }
    }
    return null;
  }
}