import {IPointEntity} from "./interfaces/IPointEntity";

export class PointEntity implements IPointEntity {
    public uuid:string;
    public depth:number;
    public state:number;
    public type:string;

    public isValid:boolean;
    public analysis:any;

    public constructor(depth:number, state?:number, type?:string, uuid?:string) {
        this.depth = depth;

        this.state = state || 0;
        this.type = type || 'None';
        this.uuid = uuid || 'newPoint';
    }
}