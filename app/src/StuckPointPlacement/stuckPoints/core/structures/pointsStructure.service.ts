import {IPointEntity} from "../entities/interfaces/IPointEntity";
import {PointEntity} from "../entities/PointEntity";

import {EventEmitter} from './../../../../Core/EventEmitter';

export interface IPointsStructureService {
    instantiate(points:IPointEntity[]);
    create(depth:number);
    update(point:IPointEntity);
    remove(active:IPointEntity);
    subscribeOnActiveChanged(observer:(value:IPointEntity) => void);
    getPoints(): IPointEntity[];
    getUnvalidatedPoint():IPointEntity;

    active: IPointEntity;
}

export class PointsStructureService implements IPointsStructureService {
    private activePoint:IPointEntity;
    private points:IPointEntity[] = [];

    private onActivePointChanged:EventEmitter<IPointEntity> = new EventEmitter<any>();

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

        if (this.points.length) {
            this.active = this.points[this.points.length - 1];
        }
        else {
            this.active = null;
        }
    }

    public subscribeOnActiveChanged(observer:(value:IPointEntity) => void) {
        this.onActivePointChanged.subscribe(observer);
    }

    public getPoints():IPointEntity[] {
        return this.points;
    }

    public getUnvalidatedPoint():IPointEntity {
        for (let index = 0; index < this.points.length; index++) {
            let item = this.points[index];

            if (!item.state) {
                return item;
            }
        }

        return null;
    }


    public get active():IPointEntity {
        return this.activePoint;
    }

    public set active(value:IPointEntity) {
        this.activePoint = value;
        this.onActivePointChanged.emit(this.activePoint);
    }
}