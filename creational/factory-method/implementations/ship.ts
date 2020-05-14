import { Transport } from "../abstractions/transport"

export class Ship implements Transport {
    delivery() {
        return "delivering by ship";
    }
 };
