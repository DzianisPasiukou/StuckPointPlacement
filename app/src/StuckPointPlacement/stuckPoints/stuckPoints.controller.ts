import {EventEmitter} from './../../Core/EventEmitter';
import {IStuckEntity} from "./core/entities/interfaces/IStuckEntity";
import {IPointInstanceEntity} from "./core/entities/interfaces/IPointInstanceEntity";
import {IShaftEntity} from "./core/entities/interfaces/IShaftEntity";
import {IPointEntity} from "./core/entities/interfaces/IPointEntity";
import {IPointsStructureService} from "./core/structures/pointsStructure.service";
import {IPointsInstancesService} from "./core/structures/pointsInstances.service";

import {PointInstanceEntity} from './core/entities/PointInstanceEntity';

export class StuckPointsController {
    public static $inject: string[] = ['pointsStructureService', 'pointsInstancesService'];

    /**
     * @input stuckEntity - the any passed to us
     */
    public stuckEntity: IStuckEntity;

    /**
     * @output onStuckEntityChanged - outputs the stuck entity is changed
     */
    public onStuckEntityChanged: EventEmitter<IStuckEntity>;

    public shaft: IShaftEntity;
    public isLocked: boolean = false;
    public isShowBin: boolean = true;
    public compression: any;
    public legends: any;

    public pointsInstances: IPointInstanceEntity[];

    private sizes: any = {
        width: 180,
        height: 780,
        verticalMargin: 20,
        shaftWidth: 2,
        pointRadius: 6.25
    };

    public constructor(private pointsStructureService: IPointsStructureService, private pointsInstancesService: IPointsInstancesService) {
        if (!angular.isDefined(this.onStuckEntityChanged)) {
            this.onStuckEntityChanged = new EventEmitter<any>();
        }

        this.pointsStructureService.instantiate(this.stuckEntity.points);
        angular.forEach(this.stuckEntity.points, (point) => {
            this.createPointInstance(point);
        });
        this.pointsInstances = this.pointsInstancesService.getPointsInstances();
        this.pointsStructureService.subscribeOnActiveChanged((value: IPointEntity) => {
            this.onActivePointChangedHandler(value);
        });

        this.init();
    }

    public removePoint(): void {
        this.pointsStructureService.remove(this.pointsStructureService.active);
        this.pointsInstancesService.remove(this.pointsStructureService.active);

        if (this.stuckEntity.points.length) {
            this.pointsStructureService.active = this.stuckEntity.points[this.stuckEntity.points.length - 1];
        }
        else {
            this.pointsStructureService.active = null;
        }

        this.onStuckEntityChanged.emit(this.stuckEntity);
    }

    public onDragStart($event: [number, number]) {
        let value = this.valueByPoint($event[1]);
        value = this.checkDepth(value);

        let unvalidated = this.getUnvalidatedPoint();
        if (!unvalidated) {
            this.createPoint(value);
        }
        else {
            unvalidated.depth = value;
            this.updatePoint(unvalidated);
        }
    }

    public onDrag($event: [number, number]) {
        let value = this.valueByPoint($event[1]);
        value = this.checkDepth(value);

        this.pointsStructureService.active.depth = value;
        this.updatePoint(this.pointsStructureService.active);
    }

    private onActivePointChangedHandler(value: IPointEntity): void {
        angular.forEach(this.pointsInstances, (instance: any) => {
            if (instance.id !== value.uuid && instance.isSelected) {
                instance = this.createPointInstance(value);
            }
            else if (instance.id === value.uuid && !instance.isSelected) {
                instance = this.createPointInstance(value);
            }
        });
    }

    private createPoint(depth): any {
        let point = this.pointsStructureService.create(depth);
        this.createPointInstance(point);

        this.pointsStructureService.active = point;

        this.onStuckEntityChanged.emit(this.stuckEntity);
    }

    private createPointInstance(point: IPointEntity): any {
        this.pointsInstancesService.create(point, this.sizes, this.pointsStructureService.active, this.pointByValue(point.depth));
    }

    private updatePoint(point): any {
        this.pointsStructureService.update(point);
        this.pointsInstancesService.update(point);
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
}