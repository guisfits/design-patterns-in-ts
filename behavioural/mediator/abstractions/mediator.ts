export interface Mediator<T> {
    changed(state: T);
}
