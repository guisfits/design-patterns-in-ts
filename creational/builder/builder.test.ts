import { CarDirector } from './implementation/car.director';
import { CarBuilder } from './implementation/car.builder';

test("Given an object, When has many forms to build it, Then we should separate each variant in a method on builder class", () => {
    // Arrange
    const builder = new CarBuilder();
    const director = new CarDirector(builder);
    
    // Act
    const car = director.buildSportCar();

    // Assert
    expect(car).not.toBeNull();
});
