import { HttpRequest } from './http-request';
import { Handler } from './handler';

export class Authenticator extends Handler {
    constructor(handler: Handler) {
        super(handler);
    }

    doHandle(request: HttpRequest): boolean {
        return !(request.username === "admin" && request.password === "1234");
    }
}
