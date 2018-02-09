import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  template: `
  <div style="padding:10px">
    <h2>Please select your pizza:</h2>
    <div [(ngModel)]="model" ngbRadioGroup name="radioBasic">
      <label class="btn btn-primary">
        <input type="radio" value="Hawaiian"> Hawaiian
      </label>
      <label class="btn btn-primary">
        <input type="radio" value="Peperoni"> Peperoni
      </label>
      <label class="btn btn-primary">
        <input type="radio" value="Everything"> Everything
      </label>
    </div>
    <hr>
    Your Selection: {{model}}
  </div>
  
  `,
  styles: []
})
export class AppComponent {
  model = 'Hawaiian';
}
