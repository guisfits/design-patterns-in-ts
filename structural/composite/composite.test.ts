import { Shape } from './shape';
import { Group } from './group';

test("Given object with same structure, When they need to be working together, Then we must share an abstraction", () => {
    // Arrange
    const group1 = new Group();
    group1.add(new Shape());
    group1.add(new Shape());

    const group2 = new Group();
    group2.add(new Shape());
    group2.add(new Shape());

    const mainGroup = new Group();
    mainGroup.add(group1);
    mainGroup.add(group2);

    const spy1 = jest.spyOn(group1, 'render');
    const spy2 = jest.spyOn(group2, 'render');

    // Act
    mainGroup.render();

    // Assert
    expect(spy1).toBeCalled();
    expect(spy2).toBeCalled();
});
