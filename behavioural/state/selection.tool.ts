import { Tool } from "./tool";

// ConcreteState
export class Selection implements Tool {
    mouseDown(): string {
        return "selection:mouseDown";
    }

    mouseUp() {
        return "selection:mouseUp";
    }
}
