import { Command } from './command';

// Invoker
export class Button {
    constructor(private command: Command) { }

    click() {
        return this.command.execute();
    }
}
