import { BrowserHistory } from './browser-history';

test("Given a BrowserHistory. When we need to iterate thru the urls. Should we don't be couple with the list implementation", () => {
    // Arrange
    const browserHistory = new BrowserHistory();

    // Act
    browserHistory.forward("www.google.com");
    browserHistory.forward("www.facebook.com");
    
    // Assert
    const iterator = browserHistory.createIterator();
    expect(iterator.current()).toBe("www.facebook.com");
    iterator.next();
    expect(iterator.current()).toBe("www.google.com");
    iterator.next();
    expect(iterator.hasNext()).toBeFalsy();
});
