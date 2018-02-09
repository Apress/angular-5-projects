import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    First Input Field: <input #firstInput />
  `,
  styles: []
})
export class AppComponent implements AfterViewInit{
  @ViewChild('firstInput') firstInput;

  ngAfterViewInit(){
    // ViewChild variables are available in this method.
    // Set initial focus.
    this.firstInput.nativeElement.focus();
  }
}
