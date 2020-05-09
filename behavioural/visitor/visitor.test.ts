import { HighlightOperation } from './highlight.operation';
import { HeadingNode } from './heading-node';
import { AnchorNode } from './anchor-node';
import { HtmlDocument } from './html-document';

test("Given our object structure is stable, When we need to add new features often, Then we must depend of an abstraction that implement this new changes", () => {
    // Arrange
    const html = new HtmlDocument();
    const anchor = new AnchorNode()
    const heading = new HeadingNode();
    html.addNode(anchor);
    html.addNode(heading);

    const spyAnchor = jest.spyOn(anchor, "execution");
    const spyHeading = jest.spyOn(heading, "execution");

    // Act
    html.execute(new HighlightOperation());

    // Arrange
    expect(spyAnchor).toBeCalled();
    expect(spyHeading).toBeCalled();
})
