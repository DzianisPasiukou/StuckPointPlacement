import {IPointInstanceEntity} from './interfaces/IPointInstanceEntity';
import {ILineEntity} from "./interfaces/ILineEntity";
import {ITextEntity} from "./interfaces/ITextEntity";
import {ICircleEntity} from "./interfaces/ICircleEntity";
import {IImageEntity} from "./interfaces/IImageEntity";

export class PointInstanceEntity implements IPointInstanceEntity {
    public id:string;
    public line:ILineEntity;
    public text:ITextEntity;
    public circle:ICircleEntity;
    public image:IImageEntity;

    public constructor(id:string, depth:number, parentWidth:number, radius:number, y:number, state:any, activeId:string) {
        this.init(id, depth, parentWidth, radius, y, state, activeId);
    }

    private init(id:string, depth:number, parentWidth:number, radius:number, y:number, state:any, activeId:string) {
        this.id = id;
        this.line = {
            x1: parentWidth / 2,
            x2: parentWidth / 2 - 24,
            y1: y,
            y2: y
        };
        this.text = {
            x: parentWidth / 2 - 28,
            y: y,
            value: depth
        };
        this.circle = {
            r: radius * (activeId === id ? 2 : 1),
            cx: parentWidth / 2 + 1 + radius * 2 * this.layer + (this.layer > 0 ? 6 : 0),
            cy: y,
            fill: state.color,
            stroke: state.border,
            strokeWidth: state.borderWidth,
            isVisible: !(activeId === id) || !state.icon
        };
        this.image = {
            x: parentWidth / 2 - 11,
            y: y - 14,
            width: 25,
            height: 27,
            link: state.icon,
            isVisible: (activeId === id) && state.icon
        };
    }

    private get layer():number {
        return 0;
    }
}