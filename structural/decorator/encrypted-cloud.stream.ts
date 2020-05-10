import { Stream } from "./stream";

export class EncryptedCloudStream implements Stream {
    constructor(private baseStream: Stream) {}

    write(data: string) {
        data += " encrypted";
        return this.baseStream.write(data);
    }
}
