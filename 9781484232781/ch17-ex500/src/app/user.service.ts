import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private _authenticated: boolean = false;
    public get authenticated(): boolean{
        return this._authenticated;
    }
    public set authenticated(value: boolean){
        this._authenticated = value;
    }    
    public authenticate(name, password){
        if ((name === 'user') && (password === 'password')){
            this._authenticated = true;
        }
    }
}