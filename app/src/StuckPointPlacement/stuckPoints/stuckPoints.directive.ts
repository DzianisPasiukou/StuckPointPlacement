export class StuckPoints {
    public restrict: string = 'AE';

    public scope: any = {
        stuckEntity: '=',
        onStuckEntityChanged: '&'
    };
    public controller: string = 'StuckPointsController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPoints/stuckPoints.html';

    public constructor() { }

    public link(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes) {
    }

    public static create() {
        var directive = () => new StuckPoints();
        directive.$inject = [];
        return directive;
    }
}