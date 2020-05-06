import { DataSource } from './data-source.subject';
import { Observer } from "../abstractions/observer";

// Concrete Observer
export class Chart implements Observer {
    value: number;

    constructor(private dataSource: DataSource) {
        this.dataSource.addObserver(this);
    }

    execute() {
        this.value = this.dataSource.Value;    
    }
}
