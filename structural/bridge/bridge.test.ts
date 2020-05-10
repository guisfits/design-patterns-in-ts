import RemoteControl from "./features/remote-control";
import SonyTV from "./implementation/sony-tv";
import SamsungTV from "./implementation/samsung-tv";

test("Given an hierarchy, When that grows in two different dimensions, Then we need to split it into two separate hierarchies and connect them using a bridge", () => {
    // Arrange
    const sonyDevice = new SonyTV();
    const sonyRemoteControl = new RemoteControl(sonyDevice);

    const samsungDevice = new SamsungTV();
    const samsungRemoteControl = new RemoteControl(samsungDevice);

    // Act
    const turnOnSony = sonyRemoteControl.turnOn();
    const turnOnSamsung = samsungRemoteControl.turnOn();

    // Assert
    expect(turnOnSony).toBe("Sony: TurnOn");
    expect(turnOnSamsung).toBe("Samsung: TurnOn");
});
