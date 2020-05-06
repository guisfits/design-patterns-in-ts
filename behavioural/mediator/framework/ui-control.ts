import { DialogBox } from "./dialog-box.mediator";

export abstract class UiControl {
    constructor(protected owner: DialogBox) { }
}
