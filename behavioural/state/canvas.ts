import { Tool } from './tool';

// Context
export class Canvas  {
    _currentTool: Tool;

    constructor(tool: Tool){
        this._currentTool = tool;
    }

    mouseDown(): string {
        return this._currentTool.mouseDown();
    }

    mouseUp(): string {
        return this._currentTool.mouseUp();
    }
}
