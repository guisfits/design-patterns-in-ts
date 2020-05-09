import { AnchorNode } from './anchor-node';
import { HeadingNode } from './heading-node';

// Visitor
export interface Operation {
    apply(node: AnchorNode | HeadingNode);
}
