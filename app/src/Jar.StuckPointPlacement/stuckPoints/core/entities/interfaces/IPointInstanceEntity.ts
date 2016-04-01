import {ILineEntity} from "./ILineEntity";
import {ITextEntity} from "./ITextEntity";
import {ICircleEntity} from "./ICircleEntity";
import {IImageEntity} from "./IImageEntity";

export interface  IPointInstanceEntity {
    id: string;
    line: ILineEntity;
    text: ITextEntity;
    circle: ICircleEntity;
    image: IImageEntity;
}