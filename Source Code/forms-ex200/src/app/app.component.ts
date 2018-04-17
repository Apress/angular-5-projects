import { Component, ViewChild } from '@angular/core';
import { NgForm, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form #appointmentForm="ngForm" novalidate (ngSubmit) = "onSubmitForm(appointmentForm)">
    <legend>Appointment</legend>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" name="name" placeholder="Name (last, first)" [(ngModel)]="_name" required>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" name="password" placeholder="Password" [(ngModel)]="_password" required>
    </div>
    <div class="form-group">
      <div class="form-check">
        <div>
          <label>Appointment Time</label>
        </div>
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="time" value="12pm" [(ngModel)]="_time" required>
          12pm 
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="time" value="2pm" [(ngModel)]="_time" required>
          2pm
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="radio" class="form-check-input" name="time" value="4pm" [(ngModel)]="_time" required>
          4pm
        </label>
      </div>
    </div>
    <div class="form-group">
      <label for="exampleTextarea">Ailment</label><textarea class="form-control" name="ailment" rows="3" [(ngModel)]="_ailment" required ></textarea>
    </div>
    <button type="submit" class="btn btn-primary" [disabled]="!_appointmentForm.valid">Submit</button>
    Valid: {{ _appointmentForm.valid }}
    Data: {{ _appointmentForm.value | json }}
  </form>
  `,
  styles: ['form { padding: 20px }', '.form-group { padding-top: 20px }']
})
export class AppComponent {
  @ViewChild('appointmentForm') _appointmentForm: NgForm;
  _name: string = 'mark';
  _password: string = '';
  _time: string = '';
  _ailment: string = '';

  onSubmitForm() {
    alert("Submitting data:" + JSON.stringify(this._appointmentForm.value));
  }
}
