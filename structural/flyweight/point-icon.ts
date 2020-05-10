import { PointType } from './point-type';

export class PointIcon {
    constructor(
        public readonly type: PointType,
        public readonly icon = []
    ) { }
}
