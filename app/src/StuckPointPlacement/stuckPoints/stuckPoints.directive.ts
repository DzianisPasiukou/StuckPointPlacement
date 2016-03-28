export class StuckPoints {
    public scope:any = {
        stuckEntity: '<',
        onStuckEntityChanged: '<'
    };

    public controller:string = 'StuckPointsController';
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public templateUrl:string = 'src/StuckPointPlacement/stuckPoints/stuckPoints.html';

    public constructor() {
    }

    public static create() {
        var directive = () => new StuckPoints();
        directive.$inject = [];
        return directive;
    }
}