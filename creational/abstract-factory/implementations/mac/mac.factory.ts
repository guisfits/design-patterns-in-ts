import { GUIFactory } from '../../abstractions/gui.factory';
import { MacButton } from './mac.button';
import { MacCheckbox } from './mac.checkbox';

export class MacFactory implements GUIFactory {
    createButton(): import("../../abstractions/button").Button {
        return new MacButton();
    }

    createCheckbox(): import("../../abstractions/checkbox").Checkbox {
        return new MacCheckbox();
    }
}
