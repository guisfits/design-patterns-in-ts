import { EncryptedCloudStream } from './encrypted-cloud.stream';
import { CloudStream } from './clound.stream';
import { CompressedCloudStream } from './compressed-cloud.stream';
import { Stream } from "./stream";

test("Given the need to add additional behaviors to an existing class, When we shouldn't inherit it, Then we should use composition", () => {
    // Arrange
    const cloud = new CloudStream();
    const compress = new CompressedCloudStream(cloud);
    const encrypt = new EncryptedCloudStream(compress);

    // Act
    const creditCardStored = storeCreditCard(encrypt);

    // Assert
    expect(creditCardStored).toContain("encrypted");
    expect(creditCardStored).toContain("compressed");
    expect(creditCardStored).toContain("stored");
});

function storeCreditCard(stream: Stream) {
    return stream.write("1234-1234-1234-1234");
}
