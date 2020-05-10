import { PointType } from "./point-type";
import { PointIcon } from "./point-icon";

export class PointIconFactory {
    private _points = {};

    getPointIcon(type: PointType): PointIcon {
        if (!this._points[type])
            this._points[type] = new PointIcon(type, []);

        return this._points[type];
    }
}
