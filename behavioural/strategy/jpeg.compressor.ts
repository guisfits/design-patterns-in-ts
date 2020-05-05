import { Compressor } from './compressor';

// StrategyImplementation
export class JpegCompressor implements Compressor {
    compress():string {
        return ".jpeg";
    }
}
