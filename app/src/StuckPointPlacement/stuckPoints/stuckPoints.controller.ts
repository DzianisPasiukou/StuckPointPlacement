import {EventEmitter} from './../../Core/EventEmitter';

export class StuckPointsController {
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
    public stuckEntityConfig: any;
    public isLocked: boolean = false;
    public isShowBin: boolean = true;
    public compression: any;
    public pointsInstances: any[];

    private sizes: any = {
        width: 180,
        height: 780,
        verticalMargin: 20,
        shaftWidth: 2,
        pointRadius: 6.25
    };

    public constructor() {
        if (!angular.isDefined(this.onStuckEntityChanged)) {
            this.onStuckEntityChanged = new EventEmitter<any>();
        }

        this.onPointChanged = new EventEmitter<any>();

        this.init();
        this.format();
    }

    public onRemove($event: ng.IAngularEvent): void {
    }

    private format() {
        this.pointsInstances = [];

        angular.forEach(this.stuckEntity.points, (point) => {
            this.pointsInstances.push({
                parent: {
                    height: this.sizes.height,
                    width: this.sizes.width
                },
                element: {
                    radius: this.sizes.pointRadius,
                    x: this.sizes.width / 2 + 1 + this.sizes.pointRadius * 2 * this.pointLayer() + (this.pointLayer() > 0 ? 6 : 0),
                    y: this.pointByValue(point.depth)
                },
                depth: point.depth,
                state: point.state,
                isSelected: true
            });
        });
    }

    private pointLayer(): number {
        return 0;
    }

    private pointByValue(depth: number): number {
        const percent = (depth - this.stuckEntity.minDepth) / (this.stuckEntity.maxDepth - this.stuckEntity.minDepth);
        const height = this.calculateHeight() * percent;
        const margined = height + this.sizes.verticalMargin;

        return margined;
    }

    private valueByPoint(point: any): number {
        const unmargined = point - this.sizes.verticalMargin;
        const percent = unmargined / this.calculateHeight();
        const value = percent * (this.stuckEntity.maxDepth - this.stuckEntity.minDepth) + this.stuckEntity.minDepth;

        return value;
    }

    private calculateHeight(): number {
        return this.sizes.height - this.sizes.verticalMargin * 2;
    }

    private init(): void {
        this.initConfig();
        this.initShaft();
        this.initCompression();
    }

    private initConfig(): void {
        this.stuckEntityConfig = {
            parent: {
                width: this.sizes.width,
                height: this.sizes.height
            },
            point: {
                radius: this.sizes.pointRadius
            }
        };
    }

    private initShaft(): void {
        this.shaft = {
            parentWidth: this.sizes.width,
            parentHeight: this.sizes.height,
            verticalMargin: this.sizes.verticalMargin,
            width: this.sizes.shaftWidth
        };
    }

    private initCompression(): void {
        this.compression = {
            width: this.sizes.width,
            height: this.sizes.height
        }
    }
}