import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PepperoniComponent } from './app.component';
import { OtherComponent, NestedCalzoneComponent, NestedPastaComponent } from './app.other-component';

@NgModule({
  declarations: [
    AppComponent,
    PepperoniComponent,
    OtherComponent,
    NestedCalzoneComponent,
    NestedPastaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
