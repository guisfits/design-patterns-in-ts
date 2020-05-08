import { HttpRequest } from './http-request';
import { Handler } from "./handler";

export class Logger extends Handler {
    constructor(next: Handler) {
        super(next)
    }

    doHandle(request: HttpRequest): boolean {
        return false;
    }
}
