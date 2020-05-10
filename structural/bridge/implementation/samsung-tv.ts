import Device from "./device";

export default class SamsungTV implements Device {
    turnOn() {
        return "Samsung: TurnOn";
    }

    turnOff() {
        return "Samsung: TurnOff"
    }

    setChannel(channel: number) {
        return "Samsung: SetChannel";
    }
};
