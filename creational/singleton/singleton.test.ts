import { Database } from './database';
test("When you want to have one instance of an object in memory and share it among all application, Then you should disabled the default constructor, keep a static instance and initiate it just once", () => {
    const database = Database.getConnection();
    expect(database.isConnected).toBeTruthy();
});
