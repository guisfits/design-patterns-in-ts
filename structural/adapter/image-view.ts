import { Image } from './image';
import { Filter } from "./filter";

export class ImageView {
    constructor(private image: Image) { }

    applyFilter(filter: Filter) {
        filter.apply(this.image);
    }
}
