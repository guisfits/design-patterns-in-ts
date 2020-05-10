import Device from "../implementation/device";
import RemoteControl from "./remote-control";

export default class AdvancedRemoteControl extends RemoteControl {
    constructor(device: Device) {
        super(device)
    }

    setChannel(channel: number) {
        return this.device.setChannel(channel);
    }
};
