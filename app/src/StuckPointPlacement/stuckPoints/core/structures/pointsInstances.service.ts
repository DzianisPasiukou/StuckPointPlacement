import {IPointInstanceEntity} from "../entities/interfaces/IPointInstanceEntity";
import {IPointEntity} from "../entities/interfaces/IPointEntity";

import {PointInstanceEntity} from './../entities/PointInstanceEntity';

export interface IPointsInstancesService {
    instantiate(pointsInstances: IPointInstanceEntity[]);
    create(point: IPointEntity, sizes: any, active: IPointEntity, pointByValue: number): IPointInstanceEntity;
    update(point: IPointEntity);
    remove(active: IPointEntity);
    getPointsInstances(): IPointInstanceEntity[];
}

export class PointsInstancesService implements IPointsInstancesService {
    private pointsInstances: IPointInstanceEntity[] = [];

    public constructor() {
    }

    public instantiate(pointsInstances: IPointInstanceEntity[]) {
        this.pointsInstances = pointsInstances;
    }

    public getPointsInstances(): IPointInstanceEntity[] {
        return this.pointsInstances;
    }

    public create(point: IPointEntity, sizes: any, active: IPointEntity, pointByValue: number): IPointInstanceEntity {
        //temprorary mock
        const states = [
            {
                color: 'rgb(255,255,255)',
                border: 'rgb(170,170,170)',
                borderWidth: '3',
                icon: ''
            },
            {
                color: 'rgb(170,170,170)',
                border: '',
                borderWidth: '',
                icon: 'assets/img/point-section-grey-active.png'
            }
        ];

        let instance: PointInstanceEntity = new PointInstanceEntity(point.uuid, point.depth, sizes.width, sizes.pointRadius, pointByValue, states[point.state], active.uuid);

        this.pointsInstances.push(instance);

        return instance;
    }

    public update(point: IPointEntity) {
        angular.forEach(this.pointsInstances, (instance: any) => {
            if (instance.id === point.uuid) {
            }
        });
    }

    public remove(active: IPointEntity) {
        angular.forEach(this.pointsInstances, (instance, index) => {
            if (instance.id === active.uuid) {
                this.pointsInstances.splice(index, 1);
                return;
            }
        });
    }
}