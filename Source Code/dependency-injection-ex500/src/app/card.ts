import { Injectable } from '@angular/core';

@Injectable()
export class Card {
    constructor(public suite: string, public rank: string) {}
    toString(): string {
        return "Card is " + this.rank + " of " + this.suite;
    }
}
