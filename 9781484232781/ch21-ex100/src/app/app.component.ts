import { Component, ViewChild } from '@angular/core';
import { NgForm, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form #f="ngForm" novalidate>
    <p>First Name <input name="fname" ngModel required /></p>
    <p>Last Name <input name="lname" ngModel required /></p>
    Valid: {{ f.valid }}
    Data: {{ f.value | json }}
  </form>  `,
  styles: []
})
export class AppComponent {
    @ViewChild('f') f: NgForm;
}
