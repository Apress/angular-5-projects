import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AuthenticatedComponent, NonAuthenticatedComponent } from './app.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedComponent,
    NonAuthenticatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
