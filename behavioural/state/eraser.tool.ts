import { Tool } from "./tool"

// ConcreteState
export class Erase implements Tool {
    mouseDown(): string {
        return "erase:mouseDown"
    }
    mouseUp(): string {
        return "erase:mouseUp"
    }
}
