import { HttpRequest } from './http-request';

export abstract class Handler {
    constructor(private next: Handler) { }

    handle(request: HttpRequest): void {
        if(this.doHandle(request))
            return;

        if(this.next != null)
            this.next.handle(request);
    }

    abstract doHandle(request: HttpRequest): boolean;
}
