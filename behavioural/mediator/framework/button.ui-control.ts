import { UiControl } from "./ui-control";
import { DialogBox } from "./dialog-box.mediator";

export class Button extends UiControl {
    private _enable: boolean

    constructor(owner: DialogBox) {
        super(owner);
        this._enable = false;
    }

    get enable(): boolean {
        return this._enable;
    }

    set enable(value: boolean) {
        this._enable = value;
        this.owner.changed(this);
    }
}
