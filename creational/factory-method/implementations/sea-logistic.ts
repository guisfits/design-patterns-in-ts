import { Transport } from '../abstractions/transport';
import { Ship } from './ship';
import { Logistic } from '../abstractions/logistic';

export class SeaLogistic implements Logistic {
    createTransport(): Transport {
        return new Ship();
    }
}
