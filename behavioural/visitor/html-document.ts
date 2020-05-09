import { Operation } from './operation';
import { HtmlNode } from './html-node';

export class HtmlDocument {
    private _nodes: HtmlNode[] = [];

    addNode(node: HtmlNode) {
        this._nodes.push(node);
    }

    execute(operation: Operation) {
        this._nodes.forEach(x => x.execution(operation));
    }
}

