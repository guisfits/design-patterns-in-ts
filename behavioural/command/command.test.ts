import { AddCustomer as AddCustomerCommand } from './app/add-customer.command';
import { CustomerService } from './app/customer-service';
import { Button } from "./framework/button";

describe("Command Pattern", () => {
    it("Given unexpected behavior. Should we delegate the execution to external implementation", () => {
        // Arrange
        const service = new CustomerService();
        const command = new AddCustomerCommand(service);
        const button = new Button(command);

        // Act
        const action = button.click();

        // Assert
        expect(action).toBe("adding new customer");
    });
});
