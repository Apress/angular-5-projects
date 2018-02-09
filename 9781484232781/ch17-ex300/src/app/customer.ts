export class Customer {
    private _id: number;
    private _name: string;
    private _city: string;
    private _state: string;
    private _balance: number;

    constructor(id: number, name: string, city: string, state: string, balance: number) {
        this._id = id;
        this._name = name;
        this._city = city;
        this._state = state;
        this._balance = balance;
    }

    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
    get city(): string {
        return this._city;
    }
    get state(): string {
        return this._state;
    }
    get balance(): number {
        return this._balance;
    }
}