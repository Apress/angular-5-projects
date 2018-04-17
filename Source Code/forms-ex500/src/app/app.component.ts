import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['div { background-color: #f2f2f2; padding: 15px; margin: 5px }', 
    'p { margin: 0px }'
  ]
})

export class AppComponent implements OnInit {
  
  public _parentForm: FormGroup; 
  public _name: FormGroup;
  public _addr: FormGroup;
  public _items: FormArray;

  constructor(private _fb: FormBuilder){}
  
  ngOnInit() {
    this._name = this._fb.group({
        fname: ['', [Validators.required]],
        lname: ['', [Validators.required]]
      });
    this._addr = this._fb.group({
        addr1: ['', [Validators.required]],
        addr2: [''],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      });
    this._items = this._fb.array(
      [this.createItemFormGroup()]
    );
    this._parentForm = this._fb.group({
      name: this._name,
      addr: this._addr,
      items: this._items
    });
  }

  createItemFormGroup(){
     return this._fb.group({
            name: ['', Validators.required],
            qty: ['1', Validators.required],
            price: ['', Validators.required]
        });
  }

  addItem(){
    this._items.push(this.createItemFormGroup());
  }

  deleteItem(index){
    delete this._items[index];
  }

  onSubmit(form: FormGroup){
    alert('Submitted');
  }
}
