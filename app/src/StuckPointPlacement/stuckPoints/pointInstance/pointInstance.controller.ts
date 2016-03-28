import {EventEmitter} from './../../../Core/EventEmitter';

interface IPointInstanceController {
    /**
     * @input point - the any passed to us
     */
    point: any;
    /**
    * @output onPointChanged - outputs the stuck entity is changed
    */
    onPointChanged: EventEmitter<any>;

    onChanged($event, point);
}

export class PointInstanceController implements IPointInstanceController {
    public static $inject: string[] = [];

    /**
     * @input point - the any passed to us
     */
    public point: any;

    /**
    * @output onPointChanged - outputs the stuck entity is changed
    */
    public onPointChanged: EventEmitter<any>;

    public constructor() {
        if (!angular.isDefined(this.onPointChanged)) {
            this.onPointChanged = new EventEmitter<any>();
        }
    }

    public onChanged($event, point) {
        this.onPointChanged.emit(point);
    }
}