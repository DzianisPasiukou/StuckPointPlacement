interface IPointInstanceController {
    /**
     * bind to controller
    */
    point: any;
    /**
     * bind to controller
     */
    onPointChanged(event: { $event: ng.IAngularEvent, point: any });

    onChanged($event, point);
}

export class PointInstanceController implements IPointInstanceController {
    public static $inject: string[] = [];

    /**
     * bind to controller
     */
    public point: any;

    public constructor() {
    }

    /**
     * bind to controller
     */
    public onPointChanged(event: { $event: ng.IAngularEvent, point: any }) { }

    public onChanged($event, point) {
        this.onPointChanged({
            $event: $event,
            point: point
        })
    }
}