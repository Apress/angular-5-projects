import { Component, ViewChild } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'non-authenticated-component',
  template: `
    <div>
      <h2>Non-authenticated</h2>
      <p>This component can be accessed without authentication.</p>
    </div>
  `,
  styles: []
})
export class NonAuthenticatedComponent {
}

@Component({
  selector: 'authenticated-component',
  template: `
    <div>
      <h2>Authenticated</h2>
      <p>This component cannot be accessed without authentication.</p>
    </div>
  `,
  styles: []
})
export class AuthenticatedComponent {
}

@Component({
  selector: 'app-root',
  template: `
    <span *ngIf="!_userService.authenticated">
    User:<input type="input" #name />
    Password:<input type="input" #password />
    <input type="button" (click)="login()" value="Login" />"
    </span>
    <hr/>
    Authenticated:{{_userService.authenticated}}
    <hr/>
    <a [routerLink]="['non-authenticated']">Non-Authenticated</a>
    <a [routerLink]="['authenticated']">Authenticated</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  loggedIn: boolean = false;
  @ViewChild('name') name;
  @ViewChild('password') password;
  constructor(private _userService: UserService){}
  login(){
      this._userService.authenticate(
        this.name.nativeElement.value, 
        this.password.nativeElement.value);
  }
}
