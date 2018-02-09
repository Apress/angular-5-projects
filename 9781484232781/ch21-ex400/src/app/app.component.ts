import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form #form [formGroup]="formGroup" (ngSubmit)="onSubmit(form)" novalidate>
      <label>Name:
        <input formControlName="name">
      </label>
      <br/>
      <label>Location:
        <input formControlName="location">
      </label>
      <br/>
      <input type="submit" value="Submit" [disabled]="!formGroup.valid">
    </form>    
  `,
  styles: []
})
export class AppComponent implements OnInit{

  formGroup: FormGroup;

  ngOnInit(){
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required)
    });
  }

  onSubmit(form: FormGroup){
    alert('sumit');
  }
}
