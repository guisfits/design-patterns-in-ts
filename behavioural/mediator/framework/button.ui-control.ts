import { UiControl } from "./ui-control";

export class Button extends UiControl {
    private _enable: boolean

    get enable(): boolean {
        return this._enable;
    }

    set enable(value: boolean) {
        this._enable = value;
        this.notify();
    }
}
