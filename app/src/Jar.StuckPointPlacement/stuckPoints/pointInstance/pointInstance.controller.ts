import {EventEmitter} from './../../../Jar.Common/Core/EventEmitter';

export class PointInstanceController {
    public static $inject: string[] = ['$timeout'];

    /**
     * @input point - the any passed to us
     */
    public point: any;

    /**
     * @output onPointChanged - outputs the stuck entity is changed
     */
    public onPointChanged: EventEmitter<any>;

    public compressions: any;

    public constructor(private $timeout: ng.ITimeoutService) {
        if (!angular.isDefined(this.onPointChanged)) {
            this.onPointChanged = new EventEmitter<any>();
        }
    }

    public onChanged($event, point) {
        this.onPointChanged.emit(point);
    }

    public formatDepth(depth: string): string {
        return parseFloat(depth).toFixed(2);
    }
}