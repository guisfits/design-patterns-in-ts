import { Operation } from "./operation";

export interface HtmlNode {
    execution(operation: Operation);
}
