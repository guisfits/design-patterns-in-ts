import { Filter } from "./filter";

// StrategyImplementation
export class BlackAndWhiteFilter implements Filter {
    apply() {
        return "black-and-white";
    }
}
