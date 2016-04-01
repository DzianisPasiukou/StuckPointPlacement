export class PointStatesService {
    public constructor() {
    }

    public noDataTransform(point: any): any {
        if (!point.analysis && point.state === 0) {
            point.state = 4;
        }

        return point;
    }
}