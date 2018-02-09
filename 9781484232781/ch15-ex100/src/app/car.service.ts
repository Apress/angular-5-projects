import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
    constructor(){
        console.log('CarService: constructor');
    }
    // Some dummy method.
    isSuperCharged(car: string){
        return car === 'Ford GT' ? 'yes' : 'no';
    }
}