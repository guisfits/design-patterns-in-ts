import { Button } from "../../abstractions/button";

export class MacButton implements Button {
    click() {
        return "clicking button on mac";
    }
}
