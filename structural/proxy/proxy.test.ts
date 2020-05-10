import Library from "./library";
import ProxyEbook from "./proxy.ebook";

test("Given an object, When we don't want to load in memory if we don't need it, Then we can use a proxy to lazy-loading by demand", () => {
    // Arrange
    const library = new Library();
    const fileNames = ["A", "B", "C"];
    fileNames.forEach(name => library.add(new ProxyEbook(name)));

    // Act
    const ebook = library.open("A");
    const show = ebook.show();

    // Assert
    expect(show).toBe("showing the ebook A");
});
