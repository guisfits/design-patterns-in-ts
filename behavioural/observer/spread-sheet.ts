import { Observer } from './observer';
import { DataSource } from './data-source';

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
