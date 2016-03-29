import {IPointInstanceEntity} from "../entities/interfaces/IPointInstanceEntity";
import {IPointEntity} from "../entities/interfaces/IPointEntity";

export class PointsInstancesService {
    public constructor() {
    }

    public create() {
    }

    public update() {
    }

    public remove(points:IPointInstanceEntity[], active:IPointEntity) {
        angular.forEach(points, (instance, index) => {
            if (instance.id === active.uuid) {
                points.splice(index, 1);
                return;
            }
        });
    }
}