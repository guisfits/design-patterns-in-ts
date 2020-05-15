import { Product } from './product';

export interface Builder<T extends Product> {
    reset();
    setSeats();
    setEngine();
    setTripComputer();
    setGPS();

    build(): T;
}


