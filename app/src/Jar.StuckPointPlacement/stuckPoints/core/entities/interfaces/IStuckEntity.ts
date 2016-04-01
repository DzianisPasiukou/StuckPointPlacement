import {IPointEntity} from "./IPointEntity";

export interface IStuckEntity {
    maxDepth: number;
    minDepth: number;
    points: IPointEntity[];
}