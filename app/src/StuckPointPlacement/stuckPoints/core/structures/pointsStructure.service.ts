import {IPointEntity} from "../entities/interfaces/IPointEntity";

export class PointsStructureService {
    public constructor() {
    }

    public create() {
    }

    public update() {
    }

    public remove(points:IPointEntity[], active:IPointEntity) {
        points.splice(points.indexOf(active), 1);
    }
}