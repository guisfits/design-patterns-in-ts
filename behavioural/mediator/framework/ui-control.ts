import { EventHandler } from './../abstractions/event-handler';

export abstract class UiControl {
    private _handlers: EventHandler[] = [];

    addEventHandler(handler: EventHandler) {
        this._handlers.push(handler);
    }

    protected notify() {
        this._handlers.forEach(x => x.handle());
    }
}
