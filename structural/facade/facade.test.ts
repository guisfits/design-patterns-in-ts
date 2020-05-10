import { NotificationService } from './notification-service';

test("Given a complex process couple to many classes, When we always need the same structure to do something, Then we should create an abstract that will handler to this complexity", () => {
    // Arrange
    const notificationServer = new NotificationService();

    // Act
    const sended = notificationServer.send("Hello World", "target");

    // Assert
    expect(sended).toBeTruthy();
});
