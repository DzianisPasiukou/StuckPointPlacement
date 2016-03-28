import {EventEmitter} from './../Core/EventEmitter';

interface IStuckPointPlacementController {
    /**
     * @input pointsEntity - the any passed to us
     */
    pointsEntity: any,
    /**
     * @output onPointsEntityChanged - outputs the stuck entity is changed
     */
    onPointsEntityChanged: EventEmitter<any>;

    onStuckEntityChanged: EventEmitter<any>;
    onStuckEntityChangedSubscriber(stuckEntity:any): void;
}

export class StuckPointPlacementController implements IStuckPointPlacementController {
    public static $inject = [];

    /**
     * @input pointsEntity - the any passed to us
     */
    public pointsEntity:any;

    /**
     * @output onPointsEntityChanged - outputs the stuck entity is changed
     */
    public onPointsEntityChanged:EventEmitter<any>;

    public onStuckEntityChanged:EventEmitter<any>;

    public constructor() {
        if (!angular.isDefined(this.onPointsEntityChanged)) {
            this.onPointsEntityChanged = new EventEmitter<any>();
        }

        this.onStuckEntityChanged = new EventEmitter<any>();
        this.onStuckEntityChanged.subscribe((stuckEntity:any) => this.onStuckEntityChangedSubscriber(stuckEntity))
    }

    public onStuckEntityChangedSubscriber(stuckEntity:any):void {
        this.pointsEntity = stuckEntity;
        this.onPointsEntityChanged.next(this.pointsEntity);
    }
}