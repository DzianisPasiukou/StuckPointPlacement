export class StuckPointPlacement implements ng.IDirective {
    public restrict: string = 'AE';

    public scope: any = {
        pointsEntity: '=',
        pointsEntityEmitter: '=pointsEntityEmitter'
    };
    public controller: string = 'StuckPointPlacementController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public replace: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPointPlacement.html';

    public constructor() {
    }

    public link(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes) {
    }

    public static create() {
        var directive = () => new StuckPointPlacement();
        directive.$inject = [];
        return directive;
    }
}