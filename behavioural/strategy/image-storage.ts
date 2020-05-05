import { Filter } from './filter';
import { Compressor } from './compressor';

// Context
export class ImageStorage {
    constructor(
        private compressor: Compressor,
        private filter: Filter,
    ){}

    store():string {
        const extension = this.compressor.compress();
        const filename = this.filter.apply(); 

        return filename + extension;
    }
}
