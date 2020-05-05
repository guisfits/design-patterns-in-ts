import { Task } from "./task";

export class TransferMoneyTask extends Task {
    protected doSomething() {
        return "transfer money";
    }
}
