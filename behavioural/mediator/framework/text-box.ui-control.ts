import { UiControl } from "./ui-control";
import { DialogBox } from "./dialog-box.mediator";

export class TextBox extends UiControl {
    private _content: string

    constructor(owner: DialogBox) {
       super(owner);
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
        this.owner.changed(this);
    }
}
