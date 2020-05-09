import { HtmlNode } from './html-node';
import { Operation } from './operation';

export class HeadingNode implements HtmlNode {
    execution(operation: Operation) {
        operation.apply(this);
    }
}
