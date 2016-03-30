import {EventEmitter} from './../../Core/EventEmitter';
import {IStuckEntity} from "./core/entities/interfaces/IStuckEntity";
import {IPointInstanceEntity} from "./core/entities/interfaces/IPointInstanceEntity";
import {IShaftEntity} from "./core/entities/interfaces/IShaftEntity";
import {IPointEntity} from "./core/entities/interfaces/IPointEntity";
import {IPointsStructureService} from "./core/structures/pointsStructure.service";
import {IPointsInstancesService} from "./core/structures/pointsInstances.service";

import {PointInstanceEntity} from './core/entities/PointInstanceEntity';
import {IDepthSynchronizerService} from "./core/structures/depthSynchronizer.service";

export class StuckPointsController {
    public static $inject:string[] = [
        'pointsStructureService',
        'pointsInstancesService',
        'depthSynchronizerService'
    ];

    /**
     * @input stuckEntity - the any passed to us
     */
    public stuckEntity:IStuckEntity;

    /**
     * @output onStuckEntityChanged - outputs the stuck entity is changed
     */
    public onStuckEntityChanged:EventEmitter<IStuckEntity>;

    public shaft:IShaftEntity;
    public isLocked:boolean = false;
    public isShowBin:boolean = true;
    public compression:any;
    public legends:any;

    public pointsInstances:IPointInstanceEntity[];

    private sizes:any = {
        width: 180,
        height: 780,
        verticalMargin: 20,
        shaftWidth: 2,
        pointRadius: 6.25
    };

    public constructor(private pointsStructureService:IPointsStructureService,
                       private pointsInstancesService:IPointsInstancesService,
                       private depthSynchronizerService:IDepthSynchronizerService) {

        if (!angular.isDefined(this.onStuckEntityChanged)) {
            this.onStuckEntityChanged = new EventEmitter<any>();
        }

        this.depthSynchronizerService.register(this.sizes, this.stuckEntity.minDepth, this.stuckEntity.maxDepth);

        this.pointsStructureService.instantiate(this.stuckEntity.points);
        angular.forEach(this.stuckEntity.points, (point) => {
            this.createPointInstance(point);
        });
        this.pointsInstances = this.pointsInstancesService.getPointsInstances();
        this.pointsStructureService.subscribeOnActiveChanged((value:IPointEntity) => {
            this.onActivePointChangedHandler(value);
        });

        this.initShaft();
        this.initCompression();
        this.initLegends();
    }

    public onDragStart($event:[number, number]) {
        let value = this.depthSynchronizerService.valueByPoint($event[1]);

        let rangePoint = this.pointsInstancesService.range($event[1]);
        let unvalidated = this.pointsStructureService.getUnvalidatedPoint();

        if (rangePoint && !angular.equals(rangePoint.id, unvalidated ? unvalidated.uuid : '')) {
            return;
        }

        if (!unvalidated) {
            this.createPoint(value);
        }
        else {
            unvalidated.depth = value;
            this.updatePoint(unvalidated);
        }
    }

    public onDrag($event:[number, number]) {
        let value = this.depthSynchronizerService.valueByPoint($event[1]);

        this.pointsStructureService.active.depth = value;
        this.updatePoint(this.pointsStructureService.active);
    }

    private onActivePointChangedHandler(value:IPointEntity):void {
        this.pointsInstancesService.update(value, this.sizes, value, value ? this.depthSynchronizerService.pointByValue(value.depth) : undefined);
    }

    private createPoint(depth):any {
        let point = this.pointsStructureService.create(depth);
        this.pointsStructureService.active = point;
        this.createPointInstance(point);

        this.onStuckEntityChanged.emit(this.stuckEntity);
    }

    private createPointInstance(point:IPointEntity):any {
        this.pointsInstancesService.create(point, this.sizes, this.pointsStructureService.active, this.depthSynchronizerService.pointByValue(point.depth));
    }

    private updatePoint(point:IPointEntity):any {
        this.pointsStructureService.update(point);
        this.pointsInstancesService.update(point, this.sizes, this.pointsStructureService.active, this.depthSynchronizerService.pointByValue(point.depth));
    }

    public removePoint():void {
        this.pointsInstancesService.remove(this.pointsStructureService.active);
        this.pointsStructureService.remove(this.pointsStructureService.active);

        this.onStuckEntityChanged.emit(this.stuckEntity);
    }

    private initShaft():void {
        this.shaft = {
            parentWidth: this.sizes.width,
            parentHeight: this.sizes.height,
            verticalMargin: this.sizes.verticalMargin,
            width: this.sizes.shaftWidth
        };
    }

    private initCompression():void {
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