import Device from "../implementation/device";

export default class RemoteControl {
    constructor(protected device: Device) { }

    turnOn() {
        return this.device.turnOn();
    }

    turnOff() {
        return this.device.turnOff();
    }
}

