import { Shape } from './shape';

export class Circle extends Shape {
    constructor(width: number, height: number, color: string, private radius: number) {
        super(width, height, color);
    }

    clone(): Circle {
        return new Circle(
            this._width,
            this._height,
            this._color,
            this.radius
        );
    }

    draw(): string {
        return `${this._width}, ${this._height}, ${this._color}, ${this.radius}`;
    }
}
