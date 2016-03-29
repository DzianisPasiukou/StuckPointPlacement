import {EventEmitter} from './../../../Core/EventEmitter';

export class PointInstanceController {
    public static $inject: string[] = ['$timeout'];

    /**
     * @input point - the any passed to us
     */
    public point: any;

    /**
     * @output onPointChanged - outputs the stuck entity is changed
     */
    public onPointChanged: EventEmitter<any>;

    public compressions: any;

    public constructor(private $timeout: ng.ITimeoutService) {
        if (!angular.isDefined(this.onPointChanged)) {
            this.onPointChanged = new EventEmitter<any>();
        }

        this.point.pointSubscriber.subscribe((point) => {
            this.$timeout(() => {
                this.init();
            });
        });
        this.init();
    }

    public onChanged($event, point) {
        this.onPointChanged.emit(point);
    }

    public onMouseDown($event: MouseEvent) {
        this.point.isSelected = true;
        this.onChanged($event, this.point);
    }

    public formatDepth(depth: string): string {
        return parseFloat(depth).toFixed(2);
    }

    private init() {
        //temprorary mock
        const states = [
            {
                color: 'rgb(255,255,255)',
                border: 'rgb(170,170,170)',
                borderWidth: '3',
                icon: ''
            },
            {
                color: 'rgb(170,170,170)',
                border: '',
                borderWidth: '',
                icon: 'assets/img/point-section-grey-active.png'
            }
        ];
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
                r: this.point.element.radius * (this.isSelected ? 2 : 1),
                cx: this.point.element.x,
                cy: this.point.element.y,
                fill: states[this.point.state].color,
                stroke: states[this.point.state].border,
                strokeWidth: states[this.point.state].borderWidth,
                isVisible: !this.isSelected || !states[this.point.state].icon
            },
            image: {
                x: this.point.parent.width / 2 - 11,
                y: this.point.element.y - 14,
                width: 25,
                height: 27,
                link: states[this.point.state].icon,
                isVisible: this.isSelected && states[this.point.state].icon
            }
        }
    }

    private get isSelected() {
        return this.point.isSelected;
    }
}