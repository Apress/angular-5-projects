import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';

@Injectable()
export class ActivateService implements CanActivate{
    constructor(private _userService: UserService){}
    canActivate() {
        return this._userService.authenticated;
  }
}