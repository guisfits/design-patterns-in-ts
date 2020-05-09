import { Image } from './image';

export interface Filter {
    apply(image: Image);
}
