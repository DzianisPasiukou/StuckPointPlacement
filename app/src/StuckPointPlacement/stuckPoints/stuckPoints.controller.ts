interface IStuckPointsController {
    /**
    bind to controller
    */
    stuckEntity: any,
    /**
    bind to controller
    */
    onStuckEntityChanged(event: { $event: ng.IAngularEvent, stuckEntity: any }): void;

    isLocked: boolean;
    isShowBin: boolean;

    onRemove($event: ng.IAngularEvent): void;
}

export class StuckPointsController implements IStuckPointsController {
    public static $inject: string[] = [];

    /**
     bind to controller
    */
    public stuckEntity: any;

    public isLocked: boolean = false;
    public isShowBin: boolean = true;

    //temporary mock tjFeedbackBoxService
    public tjFeedbackBoxService: any;

    public constructor() {
        this.tjFeedbackBoxService = {};
    }

    /**
     bind to controller
    */
    public onStuckEntityChanged(event: { $event: ng.IAngularEvent, stuckEntity: any }): void {
    }

    public onChanged($event: ng.IAngularEvent, stuckEntity: any): void {
        console.log(`stuck points changed...
call callback from parent...`);

        this.onStuckEntityChanged({
            $event: $event,
            stuckEntity: stuckEntity
        });
    }

    public onRemove($event: ng.IAngularEvent): void {
        console.log('removed ' + $event);
    }
}