export interface IDepthSynchronizerService {
    register(sizes:any, minDepth:number, maxDepth:number);
    pointByValue(depth:number):number;
    valueByPoint(point:any):number;
    checkDepth(depth:number):number;
}

export class DepthSynchronizerService implements IDepthSynchronizerService {
    private _sizes:any;
    private _minDepth:number;
    private _maxDepth:number;

    public constructor() {
    }

    public register(sizes:any, minDepth:number, maxDepth:number) {
        this._sizes = sizes;
        this._minDepth = minDepth;
        this._maxDepth = maxDepth;
    }

    public pointByValue(depth:number):number {
        const percent = (depth - this._minDepth) / (this._maxDepth - this._minDepth);
        const height = this.calculateHeight() * percent;
        const margined = height + this._sizes.verticalMargin;

        return margined;
    }

    public valueByPoint(point:any):number {
        let unmargined = point - this._sizes.verticalMargin;
        let percent = unmargined / this.calculateHeight();
        let value = percent * (this._maxDepth - this._minDepth) + this._minDepth;

        value = this.checkDepth(value);

        return value;
    }

    public checkDepth(depth:number):number {
        if (depth < this._minDepth) {
            depth = this._minDepth;
        }
        if (depth > this._maxDepth) {
            depth = this._maxDepth;
        }

        return depth;
    }

    private calculateHeight():number {
        return this._sizes.height - this._sizes.verticalMargin * 2;
    }
}