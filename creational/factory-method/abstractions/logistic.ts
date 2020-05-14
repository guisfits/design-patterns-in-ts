import { Transport } from './transport';

export interface Logistic {
    createTransport(): Transport;
};
