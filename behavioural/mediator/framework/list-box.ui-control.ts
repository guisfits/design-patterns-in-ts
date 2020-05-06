import { UiControl } from "./ui-control";
import { DialogBox } from "./dialog-box.mediator";

export class ListBox extends UiControl {
    private _selection: string

    constructor(owner: DialogBox) {
        super(owner);
    }

    get selection(): string {
        return this._selection;
    }

    set selection(value: string) {
        this._selection = value;
        this.owner.changed(this);
    }
}
