import { Prototype } from '../abstractions/prototype';

export class Shape implements Prototype {
    constructor(
        protected _width: number,
        protected _height: number,
        protected _color: string
    ) { }

    clone(): Shape {
        return new Shape(
            this._width,
            this._height,
            this._color
        );
    }
}
