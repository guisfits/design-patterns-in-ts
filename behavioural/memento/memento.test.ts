import { Editor } from "./editor";
import { History } from "./history";

test("Given some changes in Editor Must undo to previous version When restore", () => {
    // Arrange
    let editor = new Editor();
    let history = new History();

    // Act
    editor.content = "a";
    history.push(editor.content);

    editor.content = "b";
    history.push(editor.content);

    editor.content = "c";
    editor.restore(history.pop());

    // Assert
    expect(editor.content).toBe("b");

    editor.restore(history.pop());
    expect(editor.content).toBe("a");
});
