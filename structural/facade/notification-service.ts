import { Message } from "./message";
import { NotificationServer } from "./notification-server";

export class NotificationService {
    send(message: string, target: string) {
        const server = new NotificationServer();
        const connection = server.connect("ip");
        const token = server.authenticate("appId", "key");

        server.send(token, new Message(message), target);
        connection.disconnect();

        return true;
    }
}
