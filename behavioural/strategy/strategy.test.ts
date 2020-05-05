import { SepiaFilter } from "./sepia.filter";
import { PngCompressor } from "./png.compressor";
import { ImageStorage } from "./image-storage";

test("Given abstract responsibilities. When they are decouple. Should one class behaviour according with your dependencies", () => {
    // Arrange
    const pngCompressor = new PngCompressor();
    const sepiaFilter = new SepiaFilter();
    const imageStorage = new ImageStorage(pngCompressor, sepiaFilter);

    // Act
    const file = imageStorage.store();

    // Assert
    expect(file).toBe("sepia.png");
});
