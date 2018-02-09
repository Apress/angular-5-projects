import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = [
    'Peter Falk', 'Mary-Ann Blige', 'Eminem'];
}
