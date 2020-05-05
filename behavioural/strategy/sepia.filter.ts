import { Filter } from "./filter";

// StrategyImplementation
export class SepiaFilter implements Filter {
    apply() {
        return "sepia";
    }
}
