import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MdInputModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { hammerjs } from 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MdInputModule, MdDatepickerModule, MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }