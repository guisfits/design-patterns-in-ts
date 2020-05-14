import { Button } from '../../abstractions/button';

export class LinuxButton implements Button {
    click() {
        return "clicking button on linux";
    }
}
