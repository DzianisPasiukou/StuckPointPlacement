import {IAnchorEntity} from './interfaces/IAnchorEntity';
import {ITextEntity} from './interfaces/ITextEntity';
import {ILineEntity} from './interfaces/ILineEntity';
import {IRectEntity} from './interfaces/IRectEntity';
import {IPathEntity} from './interfaces/IPathEntity';

import {EventEmitter} from './../../../../Jar.Common/Core/EventEmitter';

export class AnchorEntity implements IAnchorEntity {
    private _value: string;
    private _width: number;
    private _roundings: number;
    private _padding: number;
    private _y: number;

    private onValueChanged: EventEmitter<IAnchorEntity> = new EventEmitter<IAnchorEntity>();

    public line: ILineEntity;
    public rect: IRectEntity;
    public text: ITextEntity;
    public path: IPathEntity;

    public constructor(width: number, roundings: number, padding: number, y: number = 0, value: string = '', textSizes: { width: number, height: number } = { width: 0, height: 0 }) {
        this._width = width;
        this._roundings = roundings;
        this._padding = padding;
        this._value = value;

        this.init(y, textSizes);
    }

    public get y(): number {
        return this._y;
    }

    public set y(y: number) {
        this._y = y;
    }

    public get value(): string {
        return this._value;
    }

    public set value(value: string) {
        if (!value) {
            return;
        }

        this._value = value;
    }

    public update(y: number, value: string) {
        this.y = y;
        this.value = value;

        this.onValueChanged.next(this);
    }

    public updateComponents(textSizes: { width: number, height: number } = { width: 0, height: 0 }) {
        this.init(this.y, textSizes);
    }

    public subscribe(observer: (value: IAnchorEntity) => void) {
        this.onValueChanged.subscribe(observer);
    }

    private init(y: number, textSizes: { width: number, height: number } = { width: 0, height: 0 }) {
        this.initText(y, textSizes);
        this.initRect(y, textSizes);
        this.initPath(y);
        this.initLine(y);
    }

    private initRect(y: number, textSizes: { width: number, height: number }) {
        this.rect = {
            height: textSizes.height + this._padding * 2,
            width: textSizes.width + this._padding * 2,
            x: this.text.x - textSizes.width - this._padding,
            y: y - (textSizes.height + this._padding * 2) / 2,
            rx: this._roundings,
            ry: this._roundings
        };
    }

    private initText(y: number, textSizes: { width: number, height: number }) {
        this.text = {
            x: this._width / 2 - 28,
            y: y,
            value: this.value
        };
    }

    private initLine(y: number) {
        this.line = {
            x1: this._width / 2 - 10,
            x2: this._width / 2 + 11,
            y1: y,
            y2: y
        };
    }

    private initPath(y: number) {
        this.path = {
            d: `M ${this.rect.x + this.rect.width} ${y - 4} L ${this.rect.x + this.rect.width} ${y + 4} L ${this.rect.x + this.rect.width + 5} ${y} z`
        }
    }
}