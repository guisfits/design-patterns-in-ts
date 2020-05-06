import { DataSource } from './data-source';
import { SpreadSheet } from './spread-sheet';
import { Chart } from "./chart";

test("Given many classes that depend on the same data source, We must notify these objects when this data changes", () => {
    // Arrange
    const dataSource = new DataSource();

    const sheet1 = new SpreadSheet(dataSource);
    const sheet2 = new SpreadSheet(dataSource);
    const chart = new Chart(dataSource);

    // Act
    dataSource.Value = 5;

    // Assert
    expect(sheet1.value).toEqual(dataSource.Value);
    expect(sheet2.value).toEqual(dataSource.Value)
    expect(chart.value).toEqual(dataSource.Value);
});
