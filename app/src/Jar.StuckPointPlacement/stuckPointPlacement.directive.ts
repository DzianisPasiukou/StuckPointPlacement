let template = require('./stuckPointPlacement.html');

export class StuckPointPlacement implements ng.IDirective {
    public scope: any = {
        pointsEntity: '<',
        onPointsEntityChanged: '<'
    };
    public controller: string = 'StuckPointPlacementController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;
    public templateUrl: string = template;

    public constructor() {
    }

    public static create() {
        var directive = () => new StuckPointPlacement();
        directive.$inject = [];
        return directive;
    }
}