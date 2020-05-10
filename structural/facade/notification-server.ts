import { Message } from './message';
import { AuthToken } from './auth-token';
import { Connection } from './connection';

export class NotificationServer {
    connect(ipAddress: string): Connection {
        return new Connection();
    }

    authenticate(appId: string, key: string): AuthToken {
        return new AuthToken();
    }

    send(token: AuthToken, message: Message, target: string) {
        return "sending...";
    }
}
