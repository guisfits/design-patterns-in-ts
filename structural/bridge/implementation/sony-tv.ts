import Device from "./device";

export default class SonyTV implements Device {
    turnOn() {
        return "Sony: TurnOn";
    }

    turnOff() {
        return "Sony: TurnOff";
    }

    setChannel(channel: number) {
        return "Sony: SetChannel";
    }
};
