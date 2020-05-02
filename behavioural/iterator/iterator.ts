export interface Iterator<T> {
    current(): T;
    next();
    hasNext(): boolean;
}
