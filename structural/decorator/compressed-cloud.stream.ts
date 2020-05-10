import { Stream } from "./stream";

export class CompressedCloudStream implements Stream {
    constructor(private baseStream: Stream) { }

    write(data: string) {
        data += " compressed";
        return this.baseStream.write(data);
    }
}
