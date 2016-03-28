import {EventEmitter} from './Core/EventEmitter';

export interface IApp {
    pointsEntity: any;
    onPointsEntityChanged: EventEmitter<any>;

    onPointsEntitySubscriber(emitter: any): void;
}

export class AppController implements IApp {
    public static $inject: string[] = [];

    public pointsEntity: any;

    public onPointsEntityChanged: EventEmitter<any>;

    public constructor() {
        this.onPointsEntityChanged = new EventEmitter<any>();

        this.pointsEntity = {
            maxDepth: 5600,
            minDepth: 2550,
            points: [{
                depth: 3291.89,
                state: 0,
                type: 'Differential',
                uuid: 'dcfbbf45-cded-5003-26bc-85cbede299cd',
                isValid: false,
                analysis: {}
            }]
        }

        this.onPointsEntityChanged.subscribe((emitter: any) => this.onPointsEntitySubscriber(emitter));
    }

    public onPointsEntitySubscriber(emitter: any): void {
        console.log(`emmiter called in app controller...`)

        console.log(`points changed...
need to do something...
points length = ${emitter.points.length}`);
    }
}