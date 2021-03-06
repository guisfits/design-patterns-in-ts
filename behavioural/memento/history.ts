import Stack from "ts-data.stack";
import { EditorState } from "./editor-state";

// Caretaker
export class History {
    states: Stack<EditorState>

    constructor() {
        this.states = new Stack<EditorState>();
    }

    push(content: string) {
        this.states.push(new EditorState(content));
    }

    pop(): EditorState {
        return this.states.pop();
    }
}
