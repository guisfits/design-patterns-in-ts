import { Canvas } from "./canvas";
import { Selection } from "./selectionTool";
import { Erase } from "./eraserTool";

describe("Givan a canvas. When it receive a tool. Should behaviour according to the tool", () => {
    it("selection tool", () => {
        // Arrange
        const tool = new Selection();
        const canvas = new Canvas(tool);

        // Act
        const mouseDown = canvas.mouseDown();
        const mouseUp = canvas.mouseUp();

        // Assert
        expect(mouseDown).toBe("selection:mouseDown");
        expect(mouseUp).toBe("selection:mouseUp");
    });

    it("erase tool", () => {
        // Arrange
        const tool = new Erase();
        const canvas = new Canvas(tool);

        // Act
        const mouseDown = canvas.mouseDown();
        const mouseUp = canvas.mouseUp();

        // Assert
        expect(mouseDown).toBe("erase:mouseDown");
        expect(mouseUp).toBe("erase:mouseUp");
    });
});
