import { Component } from '@angular/core';
import { fromJS } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  car = fromJS({
    make: 'bmw',
    model: 'm3',
    years: [2001,2002,2003,2004,2005,2006,2007],
    description: 'All M3s are good, and each and every one of them will provide driving pleasure for years to come. So if you can’t afford a brand new one, maybe look into getting an older model. Another good thing about used M3s is the fact that there are a lot of them. There are four different generations to choose from, and because they’ve always been so popular, second-hand M3 shoppers are almost spoiled for choice. However, this can actually become quite difficult, because with so many options, which do you choose?'
  });

  changeCar() {
    this.car = this.car.set("years", this.car.get("years").push("2008"));
  }
}
