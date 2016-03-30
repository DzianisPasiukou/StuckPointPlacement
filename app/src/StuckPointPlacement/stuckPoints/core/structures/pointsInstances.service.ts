import {IPointInstanceEntity} from "../entities/interfaces/IPointInstanceEntity";
import {IPointEntity} from "../entities/interfaces/IPointEntity";

export interface IPointsInstancesService {
    instantiate(pointsInstances:IPointInstanceEntity[]);
    create();
    update(point:IPointEntity);
    remove(active:IPointEntity);
}

export class PointsInstancesService implements IPointsInstancesService {
    private  pointsInstances:IPointInstanceEntity[];

    public constructor() {
    }

    public instantiate(pointsInstances:IPointInstanceEntity[]) {
        this.pointsInstances = pointsInstances;
    }

    public create() {
    }

    public update(point:IPointEntity) {
        angular.forEach(this.pointsInstances, (instance:any) => {
            if (instance.id === point.uuid) {
            }
        });
    }

    public remove(active:IPointEntity) {
        angular.forEach(this.pointsInstances, (instance, index) => {
            if (instance.id === active.uuid) {
                this.pointsInstances.splice(index, 1);
                return;
            }
        });
    }
}