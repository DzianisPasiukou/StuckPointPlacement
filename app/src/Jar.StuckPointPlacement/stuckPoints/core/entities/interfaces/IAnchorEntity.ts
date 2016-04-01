import {ITextEntity} from './ITextEntity';
import {ILineEntity} from './ILineEntity';
import {IRectEntity} from './IRectEntity';
import {IPathEntity} from './IPathEntity';

export interface IAnchorEntity {
    line: ILineEntity;
    rect: IRectEntity;
    text: ITextEntity;
    path: IPathEntity;

    value: string;
    y: number;

    update(y: number, value: string);
    updateComponents(textSizes?: { width: number, height: number });

    subscribe(observer: (value: IAnchorEntity) => void)
}