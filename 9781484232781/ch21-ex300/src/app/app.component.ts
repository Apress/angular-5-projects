import { Component, ViewChild } from '@angular/core';
import { NgForm, FormControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form #f="ngForm" novalidate>
    <p><label>First Name</label><input name="fname" ngModel #fname="ngModel" required />
    <span class="error" *ngIf="fname.touched && fname.hasError('required')">Required</span>
    </p>
    <p><label>Last Name</label><input name="lname" ngModel #lname="ngModel" required />
    <span class="error" *ngIf="lname.touched && lname.hasError('required')">Required</span>
    </p>
    <p><label>Email</label><input name="email" ngModel #email="ngModel" required email />
    <span class="error" *ngIf="email.touched && email.hasError('required')">Required</span>
    <span class="error" *ngIf="email.value && email.touched && email.hasError('email')">Invalid email</span>
    </p>
    <button (click)="onSubmit()" [disabled]="!f.valid">Submit</button>
  </form>`,
  styles: []
})
export class AppComponent {
    onSubmit(){
      alert('Submitted');
    }
}
