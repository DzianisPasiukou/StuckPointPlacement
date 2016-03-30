import {IPointEntity} from "../entities/interfaces/IPointEntity";
import {PointEntity} from "../entities/PointEntity";

export interface IPointsStructureService {
    instantiate(points:IPointEntity[]);
    create(depth:number);
    update(point:IPointEntity);
    remove(active:IPointEntity);
}

export class PointsStructureService implements IPointsStructureService {
    private activePoint:IPointEntity;
    private points:IPointEntity[];

    public constructor() {
    }

    public instantiate(points:IPointEntity[]) {
        this.points = points;
        this.activePoint = this.points[0];
    }

    public create(depth:number):IPointEntity {
        let point = new PointEntity(depth);
        this.points.push(point);
        return point;
    }

    public update(point:IPointEntity) {
        angular.forEach(this.points, (val) => {
            if (val.uuid === point.uuid) {
                val = point;
            }
        });
    }

    public remove(active:IPointEntity) {
        this.points.splice(this.points.indexOf(active), 1);
    }

    public get active() {
        return this.activePoint;
    }

    public set active(value:any) {
        this.activePoint = value;
    }
}