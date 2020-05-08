import { HttpRequest } from './http-request';
import { Handler } from './handler';

export class WebServer {
    constructor(
        private handler: Handler
    ) { }

    handle(request: HttpRequest) {
        this.handler.handle(request);
    }
}
