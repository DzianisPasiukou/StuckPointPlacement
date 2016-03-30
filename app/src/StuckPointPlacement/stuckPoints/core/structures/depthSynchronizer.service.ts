export class DepthSynchronizerService {
    private _sizes: any;
    private _minDepth: number;
    private _maxDepth: number;

    public constructor() { }

    public register(sizes: any, minDepth: number, maxDepth: number) {
        this._sizes = sizes;
        this._minDepth = minDepth;
        this._maxDepth = maxDepth;
    }

    public pointByValue(depth: number): number {
        const percent = (depth - this._minDepth) / (this._maxDepth - this._minDepth);
        const height = this.calculateHeight() * percent;
        const margined = height + this._sizes.verticalMargin;

        return margined;
    }

    public valueByPoint(point: any): number {
        const unmargined = point - this._sizes.verticalMargin;
        const percent = unmargined / this.calculateHeight();
        const value = percent * (this._maxDepth - this._minDepth) + this._minDepth;

        return value;
    }

    private calculateHeight(): number {
        return this._sizes.height - this._sizes.verticalMargin * 2;
    }
}