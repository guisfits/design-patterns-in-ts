import { Observer } from "../abstractions/observer";
import { DataSource } from "./data-source.subject";

// Concrete Observer
export class SpreadSheet implements Observer {
    value: number;

    constructor(private dataSource: DataSource) {
        this.dataSource.addObserver(this);
    }

    execute() {
        this.value = this.dataSource.Value;
    }
}
