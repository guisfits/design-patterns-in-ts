import { LinuxFactory } from './implementations/linux/linux.factory';
import { MacFactory } from './implementations/mac/mac.factory';

describe("Given a relative number of class that corresponding to the same family, When we need to create a group of those classes, Then we should use an abstract class that will instantiate que corresponding object to those family", () => {
    it("linux family", () => {
        // Arrange
        const factory = new LinuxFactory();

        // Act
        const button = factory.createButton();
        const checkbox = factory.createCheckbox();

        // Arrange
        expect(button.click()).toContain("linux");
        expect(checkbox.check()).toContain("linux");
    });

    it("mac family", () => {
        // Arrange
        const factory = new MacFactory();

        // Act
        const button = factory.createButton();
        const checkbox = factory.createCheckbox();

        // Arrange
        expect(button.click()).toContain("mac");
        expect(checkbox.check()).toContain("mac");
    });
})
