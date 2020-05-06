import { Mediator } from '../abstractions/mediator';
import { UiControl } from "./ui-control";

export abstract class DialogBox implements Mediator<UiControl> {
    abstract changed(state: UiControl);
}
