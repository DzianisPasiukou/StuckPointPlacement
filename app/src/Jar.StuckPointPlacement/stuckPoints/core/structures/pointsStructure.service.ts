import {IPointEntity} from "../entities/interfaces/IPointEntity";
import {PointEntity} from "../entities/PointEntity";

import {EventEmitter} from './../../../../Jar.Common/Core/EventEmitter';

export interface IPointsStructureService {
    instantiate(points: IPointEntity[]);
    create(depth: number);
    update(point: IPointEntity);
    remove(active: IPointEntity);
    find(id: string): IPointEntity;
    subscribeOnActiveChanged(observer: (value: IPointEntity) => void);
    getPoints(): IPointEntity[];
    getUnvalidatedPoint(): IPointEntity;

    active: IPointEntity;
}

export class PointsStructureService implements IPointsStructureService {
    public static $inject: string[] = ['$rootScope'];

    private activePoint: IPointEntity;
    private points: IPointEntity[] = [];

    private onActivePointChanged: EventEmitter<IPointEntity> = new EventEmitter<any>();

    public constructor(private $rootScope: ng.IRootScopeService) {
    }

    public instantiate(points: IPointEntity[]) {
        angular.forEach(points, (point) => {
            this.$rootScope.$broadcast('jar.trajectory.point.created', point);
        });

        this.points = points;
        this.activePoint = this.points[0];
    }

    public create(depth: number): IPointEntity {
        let point = new PointEntity(depth);
        this.points.push(point);

        this.$rootScope.$broadcast('jar.trajectory.point.created', point);

        return point;
    }

    public update(point: IPointEntity) {
        angular.forEach(this.points, (val) => {
            if (val.uuid === point.uuid) {
                val = point;
            }
        });
    }

    public remove(active: IPointEntity) {
        this.points.splice(this.points.indexOf(active), 1);

        if (this.points.length) {
            this.active = this.points[this.points.length - 1];
        }
        else {
            this.active = null;
        }
    }

    public find(id: string): IPointEntity {
        let finded;

        angular.forEach(this.points, (point) => {
            if (point.uuid === id) {
                finded = point;
                return;
            }
        });

        return finded;
    }

    public subscribeOnActiveChanged(observer: (value: IPointEntity) => void) {
        this.onActivePointChanged.subscribe(observer);
    }

    public getPoints(): IPointEntity[] {
        return this.points;
    }

    public getUnvalidatedPoint(): IPointEntity {
        for (let index = 0; index < this.points.length; index++) {
            let item = this.points[index];

            if (!item.state) {
                return item;
            }
        }

        return null;
    }


    public get active(): IPointEntity {
        return this.activePoint;
    }

    public set active(value: IPointEntity) {
        if (value === this.activePoint) {
            return;
        }

        this.activePoint = value;
        this.onActivePointChanged.emit(this.activePoint);
    }

    private isExistPoint(id: string): boolean {
        let isExist = false;

        angular.forEach(this.points, (point: IPointEntity) => {
            if (point.uuid === id) {
                isExist = true;
                return;
            }
        });

        return isExist;
    }
}