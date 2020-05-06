import { Command } from './command';
import Stack from "ts-data.stack";

export class History {
    private stack: Stack<Command>;

    constructor() {
        this.stack = new Stack<Command>();
    }

    pop() {
        var command = this.stack.peek();
        return this.stack.pop();
    }
    
    push(command: Command) {
        command.execute();
        this.stack.push(command);
    }
}
