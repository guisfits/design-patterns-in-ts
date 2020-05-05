export abstract class Task {
    Execute() {
        // Common implementation
        return this.doSomething();
    }

    protected abstract doSomething();
}
