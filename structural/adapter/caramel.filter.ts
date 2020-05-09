import { Image } from './image';
import { Caramel } from './framework/caramel';
import { Filter } from "./filter";

export class CaramelFilter implements Filter {
    constructor(private adaptee: Caramel) { }

    apply(image: Image) {
        return this.adaptee.filter(image);
    }
}
