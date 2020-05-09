import { HtmlNode } from "./html-node";
import { Operation } from "./operation";

export class AnchorNode implements HtmlNode {
    execution(operation: Operation) {
        operation.apply(this);
    }
}
