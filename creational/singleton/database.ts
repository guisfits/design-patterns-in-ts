export class Database {
    private static _connection: Database;

    private constructor() {}

    static getConnection(): Database {
        if(this._connection == null)
            this._connection = new Database();

        return this._connection;
    }

    get isConnected(): boolean {
        return this.isConnected != null;
    }
}
