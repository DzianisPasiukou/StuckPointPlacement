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

    compression: any;

    onRemove($event: ng.IAngularEvent): void;
}

export class StuckPointsController implements IStuckPointsController {
    public static $inject: string[] = [];

    /**
     bind to controller
    */
    public stuckEntity: any;

    public shaft: any;

    public isLocked: boolean = false;
    public isShowBin: boolean = true;

    public compression: any;

    private sizes: any = {
        width: 180,
        height: 780
    }

    public constructor() {
        this.initShaft();
        this.initCompression();
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

    public onPointChanged(event: { $event: ng.IAngularEvent, point: any }): void {
        console.log(`point changed...`);
    }

    public onRemove($event: ng.IAngularEvent): void {
        console.log('removed ' + $event);
    }

    private initShaft(): void {
        this.shaft = {
            parentWidth: this.sizes.width,
            parentHeight: this.sizes.height
        };
    }

    private initCompression(): void {
        this.compression = {
            width: this.sizes.width,
            height: this.sizes.height
        }
    }
}