import { Operation } from './operation';
import { HeadingNode } from './heading-node';
import { AnchorNode } from './anchor-node';

export class HighlightOperation implements Operation {
    apply(node: AnchorNode | HeadingNode) {
        if(typeof(node) == typeof(AnchorNode))
            return this.applyAnchor(node);

        return this.applyHeading(node);
    }

    private applyAnchor(node: AnchorNode) {
        return "highlighting anchor node";
    }

    private applyHeading(node: HeadingNode) {
        return "highlighting heading node";
    }
}
