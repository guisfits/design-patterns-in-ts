import { WebServer } from './web-server';
import { Logger } from './logger';
import { Compressor } from './compressor';
import { Authenticator } from './authenticator';
import { HttpRequest } from './http-request';

describe("Given a pipeline of steps When each class play a role, Should we decouple the steps from the caller", () => {
    test("Given valid input, Should processes till the end", () => {
        // Arrange
        const compressor = new Compressor(null);
        const log = new Logger(compressor);
        const auth = new Authenticator(log);
        const server = new WebServer(auth);

        const spyServer = jest.spyOn(server, "handle");
        const spyAuth = jest.spyOn(auth, "doHandle");
        const spyLog = jest.spyOn(log, "doHandle");
        const spyCompressor = jest.spyOn(compressor, "doHandle");
        
        // Act
        server.handle(new HttpRequest("admin", "1234"));

        // Assert
        expect(spyServer).toBeCalled();
        expect(spyAuth).toBeCalled();
        expect(spyLog).toBeCalled();
        expect(spyCompressor).toBeCalled();
    });

    test("Given invalid input, Should process break on some point", () => {
        // Arrange
        const compressor = new Compressor(null);
        const log = new Logger(compressor);
        const auth = new Authenticator(log);
        const server = new WebServer(auth);

        const spyServer = jest.spyOn(server, "handle");
        const spyAuth = jest.spyOn(auth, "doHandle");
        const spyLog = jest.spyOn(log, "doHandle");
        const spyCompressor = jest.spyOn(compressor, "doHandle");
        
        // Act
        server.handle(new HttpRequest("abc", "000"));

        // Assert
        expect(spyServer).toBeCalled();
        expect(spyAuth).toBeCalled();
        expect(spyLog).not.toBeCalled();
        expect(spyCompressor).not.toBeCalled();
    });
})
