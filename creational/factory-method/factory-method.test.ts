import { RoadLogistic } from './implementations/road-logistic';
import { SeaLogistic } from './implementations/sea-logistic';

describe("Given a logistic company that delivery products, When we don't know the transportation type, Then we should extract an interface and return an abstract type", () => {
    it("Delivery by road", () => {
        // Arrange
        const logistic = new RoadLogistic();
        const transport = logistic.createTransport();

        // Act
        const delivery = transport.delivery();

        // Assert
        expect(delivery).toContain("truck")
    });

    it("Delivery by sea", () => {
        // Arrange
        const logistic = new SeaLogistic();
        const transport = logistic.createTransport();

        // Act
        const delivery = transport.delivery();

        // Assert
        expect(delivery).toContain("ship");
    });
})
