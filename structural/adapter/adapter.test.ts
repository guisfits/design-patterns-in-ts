import { ImageView } from './image-view';
import { Image } from './image';
import { CaramelFilter } from './caramel.filter';
import { Caramel } from './framework/caramel';
test("Given an object that's not represented the requirement structure that we need, Should we create another class that translate one to other", () => {
    // Arrange
    const frameworkFilter = new Caramel();
    const image = new Image();
    const viewer = new ImageView(image);

    // Act
    const result = viewer.applyFilter(new CaramelFilter(frameworkFilter));

    // Assert
    expect(result).not.toBeNull();
})
