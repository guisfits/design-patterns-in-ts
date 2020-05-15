import { Circle } from './implementation/circle';
test("Given the necessity to copy all existing fields of a class to another, When this class has some private fields and protected behavior, Then we should implement a method clone and return a new type with all existing values inside the class", () => {
    // Arrange
    const circle = new Circle(10, 5, "blue", 2);

    // Act
    const clone = circle.clone();

    // Assert
    expect(clone.draw()).toBe(circle.draw());
});
