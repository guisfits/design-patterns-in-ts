import { Transport } from '../abstractions/transport';

export class Truck implements Transport {
    delivery() {
        return "delivering by truck";
    } 
};
    