import { Builder } from "../abstractions/builder";
import { Car } from './car';

export class CarDirector {
    constructor(private builder: Builder<Car>) {}

    buildSportCar(): Car {
        this.builder.setEngine();
        this.builder.setSeats();
        return this.builder.build();
    }

    buildSUV(): Car {
        this.builder.setSeats();
        this.builder.setTripComputer();
        this.builder.setGPS();
        this.builder.setEngine();

        return this.builder.build();
    }
}
