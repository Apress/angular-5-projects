import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';

export function validateNotMercedes(control: AbstractControl) {
    return (control.value.toLowerCase() != 'mercedes') ? 
      null : 
      { validateNotMercedes: {
        valid: false
      }
    }
}

@Component({
  selector: 'app-root',
  template: `
    <form #form [formGroup]="formGroup" (ngSubmit)="onSubmit(form)" novalidate>
      <label>Make:
        <input formControlName="make">
      </label>
      <br/>
      <label>Model:
        <input formControlName="model">
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
      make: new FormControl('', [Validators.required, validateNotMercedes]),
      model: new FormControl('', Validators.required)
    });
  }

  onSubmit(form: FormGroup){
    alert('sumit');
  }
}
