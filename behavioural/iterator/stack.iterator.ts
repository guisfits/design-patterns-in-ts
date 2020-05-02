import Stack from 'ts-data.stack';
import { Iterator } from './iterator';

export class StackIterator<T> implements Iterator<T> {
    _stack: Stack<T>;

    constructor(stack: Stack<T>) {
        this._stack = stack;
    }
    
    current(): T {
        return this._stack.peek();
    }

    next() {
        this._stack.pop();
    }

    hasNext(): boolean {
        return this._stack.isEmpty() == false;
    }
}
