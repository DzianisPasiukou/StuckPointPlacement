import {EventEmitter} from './../../Core/EventEmitter';

interface IStuckPointsController {
    /**
    * @input stuckEntity - the any passed to us
    */
    stuckEntity: any,
    /**
    * @output onStuckEntityChanged - outputs the stuck entity is changed
    */
    onStuckEntityChanged: EventEmitter<any>;

    isLocked: boolean;
    isShowBin: boolean;

    compression: any;

    onRemove($event: ng.IAngularEvent): void;
}

export class StuckPointsController implements IStuckPointsController {
    public static $inject: string[] = [];

    /**
    * @input stuckEntity - the any passed to us
    */
    public stuckEntity: any;

    /**
   * @output onStuckEntityChanged - outputs the stuck entity is changed
   */
    public onStuckEntityChanged: EventEmitter<any>;

    public onPointChanged: EventEmitter<any>;

    public shaft: any;

    public isLocked: boolean = false;
    public isShowBin: boolean = true;

    public compression: any;

    private sizes: any = {
        width: 180,
        height: 780
    }

    public constructor() {
        if (!angular.isDefined(this.onStuckEntityChanged)) {
            this.onStuckEntityChanged = new EventEmitter<any>();
        }

        this.onPointChanged = new EventEmitter<any>();

        this.initShaft();
        this.initCompression();
    }

    public onRemove($event: ng.IAngularEvent): void {
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