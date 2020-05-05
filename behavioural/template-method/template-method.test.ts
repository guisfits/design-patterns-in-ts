import { TransferMoneyTask } from './transfer-money.task';
test("Given a default behavior. Should we define a templates to class implement it", () => {
    // Arrange
    const transferMoney = new TransferMoneyTask();

    // Act
    const task = transferMoney.Execute();

    // Assert
    expect(task).toBe("transfer money");
});
