import { StackIterator } from './stack.iterator';
import { Iterator } from './iterator';
import Stack from 'ts-data.stack';

export class BrowserHistory {
    _stack: Stack<string>;

    constructor() {
        this._stack = new Stack<string>();
    }

    forward(url: string) {
        this._stack.push(url);
    }

    pop(): string {
        return this._stack.pop();
    }

    createIterator(): Iterator<string> {
        return new StackIterator(this._stack);
    }
}
