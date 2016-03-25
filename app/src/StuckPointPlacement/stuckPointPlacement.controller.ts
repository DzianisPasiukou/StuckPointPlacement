import {EventEmitter} from './../Core/EventEmitter';

interface IStuckPointPlacementController {
    /**
    bind to controller
    */
    pointsEntity: any,
    /**
    bind to controller
    */
    pointsEntityEmitter: EventEmitter<any>;

    onStuckEntityChanged($event: ng.IAngularEvent, stuckEntity: any): void;
}

export class StuckPointPlacementController implements IStuckPointPlacementController {
    public static $inject = [];

    /**
    bind to controller
    */
    public pointsEntity: any;

    /**
     bind to controller
    */
    public pointsEntityEmitter: EventEmitter<any>;

    public constructor() {
    }

    public onStuckEntityChanged($event: ng.IAngularEvent, stuckEntity: any): void {
        console.log(`stuck points placement...
call emmiter`)

        this.pointsEntity = stuckEntity;

        this.pointsEntityEmitter.next(this.pointsEntity);
    }
}