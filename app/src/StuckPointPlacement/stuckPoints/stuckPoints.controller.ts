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
    public isLocked: boolean = false;
    public isShowBin: boolean = true;
    public compression: any;
    public pointsInstances: any[];
    public legends: any;

    private activePoint: any;
    private captured: any;

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
        this.onPointChanged.subscribe((point) => this.onPointChangedHandler(point));

        this.active = this.stuckEntity.points[0];

        this.init();
        this.format();
    }

    public onRemove(): void {
        this.stuckEntity.points.splice(this.stuckEntity.points.indexOf(this.active), 1);

        angular.forEach(this.pointsInstances, (instance, index) => {
            if (instance.id === this.active.uuid) {
                this.pointsInstances.splice(index, 1);
                return;
            }
        });

        if (this.stuckEntity.points.length) {
            this.active = this.stuckEntity.points[this.stuckEntity.points.length - 1];
        }
        else {
            this.active = null;
        }
    }

    public onDragStart($event: [number, number]) {
        let value = this.valueByPoint($event[1]);
        value = this.checkDepth(value);

        let unvalidated = this.getUnvalidatedPoint();
        if (!unvalidated) {
            this.instatiatePoint(value);
        }
        else {
            this.updatePoint(unvalidated, value);
        }
    }

    public onDrag($event: [number, number]) {
        let value = this.valueByPoint($event[1]);
        value = this.checkDepth(value);
        this.updatePoint(this.active, value);
    }

    private onPointChangedHandler(instance) {
        angular.forEach(this.stuckEntity.points, (point) => {
            if (point.uuid === instance.id) {
                this.active = point;
                return;
            }
        });
    }

    private instatiatePoint(depth): any {
        let point = this.createPoint(depth);
        this.stuckEntity.points.push(point);
        this.pointsInstances.push(this.createPointInstance(point));

        this.active = point;

        this.onStuckEntityChanged.emit(this.stuckEntity);
    }

    private createPoint(depth): any {
        let point = {
            depth: depth,
            state: 0,
            type: 'None',
            uuid: 'newPoint'
        };

        return point;
    }

    private updatePoint(point, depth): any {
        point.depth = depth;

        angular.forEach(this.pointsInstances, (instance: any) => {
            if (instance.id === point.uuid) {
                instance.depth = point.depth;
                instance.element.y = this.pointByValue(point.depth);
                instance.pointSubscriber.next(instance);
            }
        });
    }

    private format() {
        this.pointsInstances = [];

        angular.forEach(this.stuckEntity.points, (point) => {
            this.pointsInstances.push(this.createPointInstance(point));
        });
    }

    private createPointInstance(point): any {
        return {
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
            isSelected: true,
            id: point.uuid,
            pointSubscriber: new EventEmitter<any>()
        };
    }

    private checkDepth(depth: number): number {
        if (depth < this.stuckEntity.minDepth) {
            depth = this.stuckEntity.minDepth;
        }
        if (depth > this.stuckEntity.maxDepth) {
            depth = this.stuckEntity.maxDepth;
        }

        return depth;
    }

    private getUnvalidatedPoint() {
        for (let index = 0; index < this.stuckEntity.points.length; index++) {
            let item = this.stuckEntity.points[index];

            if (!item.state) {
                return item;
            }
        }

        return null;
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
        this.initShaft();
        this.initCompression();
        this.initLegends();
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

    private initLegends() {
        this.legends = {
            initial: {
                line: {
                    x1: this.sizes.width / 2,
                    x2: this.sizes.width / 2 - 24,
                    y1: this.sizes.verticalMargin,
                    y2: this.sizes.verticalMargin
                },
                text: {
                    x: this.sizes.width / 2 - 28,
                    y: this.sizes.verticalMargin,
                    value: this.stuckEntity.minDepth
                }
            },
            finish: {
                line: {
                    x1: this.sizes.width / 2,
                    x2: this.sizes.width / 2 - 24,
                    y1: this.sizes.height - this.sizes.verticalMargin,
                    y2: this.sizes.height - this.sizes.verticalMargin
                },
                text: {
                    x: this.sizes.width / 2 - 28,
                    y: this.sizes.height - this.sizes.verticalMargin,
                    value: this.stuckEntity.maxDepth
                }
            }
        };
    }

    private notifyInstances(instance) {
        instance.pointSubscriber.emit(instance);
    }

    public get active() {
        return this.activePoint;
    }

    public set active(value: any) {
        angular.forEach(this.pointsInstances, (instance) => {
            if (instance.id !== value.uuid && instance.isSelected) {
                instance.isSelected = false;
                this.notifyInstances(instance);
            }
            else if (instance.id === value.uuid && !instance.isSelected) {
                instance.isSelected = true;
                this.notifyInstances(instance);
            }
        });

        this.activePoint = value;
    }
}