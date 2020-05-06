import { ArticlesDialogBox } from './implementations/articles.dialog-box';

test(`Given objects that need to communicate with each other, When we cannot create coupling between them, Should we delegate the integration role to a mediator`, () => {
    // Arrange
    const dialogBox = new ArticlesDialogBox();

    // Act
    dialogBox.articlesListBox.selection = "Article 1";

    // Assert
    expect(dialogBox.titleTextBox.content).toBe("Article 1");
    expect(dialogBox.saveButton.enable).toBeTruthy();
});
