import { GUIFactory } from '../../abstractions/gui.factory';
import { LinuxButton } from './linux,button';
import { LinuxCheckbox } from './linux.checkbox';

export class LinuxFactory implements GUIFactory {
    createButton(): import("../../abstractions/button").Button {
        return new LinuxButton();
    }

    createCheckbox(): import("../../abstractions/checkbox").Checkbox {
        return new LinuxCheckbox();
    }
}
