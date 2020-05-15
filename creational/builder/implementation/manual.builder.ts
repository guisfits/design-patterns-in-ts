import { Builder } from "../abstractions/builder";
import { Manual } from "./manual";
import { Product } from "../abstractions/product";

export class ManualBuilder implements Builder {
    private manual: Manual;

    constructor() {
        this.reset();
    }

    reset() {
        this.manual = new Manual();
    }

    setSeats() { }
    setEngine() { }
    setTripComputer() { }
    setGPS() { }

    build(): Product {
        return this.manual;
    }
}
