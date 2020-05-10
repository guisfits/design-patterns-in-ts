import { PointIconFactory } from './icon-factory';
import { Point } from "./point";
import { PointType } from "./point-type";

export class PointService {
    constructor(private factory: PointIconFactory) { }

    getPoints(): Point[] {
        return [
            new Point(1, 2, this.factory.getPointIcon(PointType.Cafe)),
            new Point(3, 4, this.factory.getPointIcon(PointType.Restaurant))
        ];
    }
}
