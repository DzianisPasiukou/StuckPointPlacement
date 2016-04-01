let template = require('./stuckPoints.html');

export class StuckPoints {
    public scope: any = {
        stuckEntity: '<',
        onStuckEntityChanged: '<'
    };

    public controller: string = 'StuckPointsController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = template;

    public constructor() {
    }

    public static create() {
        var directive = () => new StuckPoints();
        directive.$inject = [];
        return directive;
    }
}