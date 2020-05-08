import { HttpRequest } from './http-request';
import { Handler } from './handler';

export class Compressor extends Handler {
    constructor(handler: Handler) { 
        super(handler);
    }
    
    doHandle(request: HttpRequest): boolean {
        return true;
    }
}
