import { Subject } from "./subject";

// Notify
export class DataSource extends Subject {
    private _value: number;

    constructor() {
        super();
    }

    get Value(): number {
        return this._value;
    }

    set Value(value: number) {
        this._value = value;
        this.notifyObservers();
    }
}
