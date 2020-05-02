import { EditorState } from "./editor-state";

// Originator
export class Editor {
    public content: string

    createState() {
        return new EditorState(this.content);
    }

    restore(state: EditorState) {
        this.content = state._content;
    }
}
