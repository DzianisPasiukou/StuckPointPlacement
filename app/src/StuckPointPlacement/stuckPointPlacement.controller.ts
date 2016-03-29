import {EventEmitter} from './../Core/EventEmitter';
import {IStuckEntity} from "./stuckPoints/core/entities/interfaces/IStuckEntity";

interface IStuckPointPlacementController {
    /**
     * @input pointsEntity - the any passed to us
     */
    pointsEntity: IStuckEntity,
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
    public pointsEntity:IStuckEntity;

    /**
     * @output onPointsEntityChanged - outputs the stuck entity is changed
     */
    public onPointsEntityChanged:EventEmitter<IStuckEntity>;

    public onStuckEntityChanged:EventEmitter<IStuckEntity>;

    public constructor() {
        if (!angular.isDefined(this.onPointsEntityChanged)) {
            this.onPointsEntityChanged = new EventEmitter<IStuckEntity>();
        }

        this.onStuckEntityChanged = new EventEmitter<IStuckEntity>();
        this.onStuckEntityChanged.subscribe((stuckEntity:IStuckEntity) => this.onStuckEntityChangedSubscriber(stuckEntity))
    }

    public onStuckEntityChangedSubscriber(stuckEntity:IStuckEntity):void {
        this.pointsEntity = stuckEntity;
        this.onPointsEntityChanged.next(this.pointsEntity);
    }
}