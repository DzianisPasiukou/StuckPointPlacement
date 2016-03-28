import {EventEmitter} from './../../../Core/EventEmitter';

export class PointInstanceController {
    public static $inject: string[] = [];

    /**
     * @input point - the any passed to us
     */
    public point: any;

    /**
    * @output onPointChanged - outputs the stuck entity is changed
    */
    public onPointChanged: EventEmitter<any>;

    public compressions: any;

    public constructor() {
        if (!angular.isDefined(this.onPointChanged)) {
            this.onPointChanged = new EventEmitter<any>();
        }

        this.init();
    }

    public onChanged($event, point) {
        this.onPointChanged.emit(point);
    }

    public formatDepth(depth: number): string {
        return depth.toString();
    }

    private init() {
        this.compressions = {
            line: {
                x1: this.point.parent.width / 2,
                x2: this.point.parent.width / 2 - 24,
                y1: this.point.element.y,
                y2: this.point.element.y
            },
            text: {
                x: this.point.parent.width / 2 - 28,
                y: this.point.element.y
            },
            circle: {
                r: this.point.element.radius,
                cx: this.point.element.x,
                cy: this.point.element.y,
                fill: this.point.element.fill,
                stroke: this.point.element.stroke,
                strokeWidth: this.point.element.strokeWidth
            },
            image: {
                x: this.point.parent.width / 2 - 11,
                y: this.point.element.y - 14,
                width: 25,
                height: 27,
                link: this.point.element.icon
            }
        }
    }

    private get isSelected() {
        return this.point.isSelected;
    }
}