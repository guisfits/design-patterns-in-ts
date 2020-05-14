import { Checkbox } from '../../abstractions/checkbox';

export class LinuxCheckbox implements Checkbox {
    check() {
        return "clicking on linux";
    }
}
