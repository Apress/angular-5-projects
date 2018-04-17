export class Language {
    private _code: string;
    private _name: string;
    public get code() {
        return this._code;
    }
    public get name() {
        return this._name;
    }
    public set code(newValue: string){
        this._code = newValue;
    }
    public set name(newValue: string){
        this._name = newValue;
    }
} 