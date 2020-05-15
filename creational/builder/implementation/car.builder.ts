import { Builder } from '../abstractions/builder';
import { Car } from './car';
import { Product } from '../abstractions/product';

export class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.reset();
    }

    reset() {
        this.car = new Car();
    }

    setSeats() { }
    setEngine() { }
    setTripComputer() { }
    setGPS() { }

    build(): Product {
        return this.car;
    }
}
