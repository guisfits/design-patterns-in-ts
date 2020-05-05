import { Compressor } from "./compressor";

// StrategyImplementation
export class PngCompressor implements Compressor {
    compress() {
        return ".png";
    }
}
