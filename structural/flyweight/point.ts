import { PointIcon } from './point-icon';
export class Point {
    constructor(
        private x: number,
        private y: number,
        private pointIcon: PointIcon
    ) { }

    draw() {
        return `${this.pointIcon.type} at (${this.x}, ${this.y})`;
    }
}
