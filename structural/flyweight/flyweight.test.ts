import { PointService } from './point-service';
import { PointIconFactory } from './icon-factory';

// Flyweight is an object that we can share
test("Given a large number of object, When they consume a significant amount of memory, Then we should...", () => {
    // Arrange
    const service = new PointService(new PointIconFactory());
    
    // Act
    const points = service.getPoints();

    // Assert
    expect(points).not.toBeNull();
});
