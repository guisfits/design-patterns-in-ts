import { Observer } from "./observer";

// Observable
export abstract class Subject {
    observers: Observer[];

    constructor() {
        this.observers = [];
    }

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        const index = this.observers.findIndex(x => x == observer);
        this.observers = this.observers.splice(index, 1);
    }

    protected notifyObservers() {
        this.observers.forEach(x => x.execute());
    }
}
