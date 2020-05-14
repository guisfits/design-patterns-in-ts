import { Truck } from './truck';
import { Transport } from '../abstractions/transport';
import { Logistic } from '../abstractions/logistic';

export class RoadLogistic implements Logistic {
    createTransport(): Transport {
        return new Truck()
    }
}
