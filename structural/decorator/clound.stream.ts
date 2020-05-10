import { Stream } from "./stream";

export class CloudStream implements Stream {
    write(data: string) {
        return data += " stored";
    }
}
