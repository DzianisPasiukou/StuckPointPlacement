export class StuckPointPlacement implements ng.IDirective {
    public scope: any = {
        pointsEntity: '<',
        onPointsEntityChanged: '<'
    };
    public controller: string = 'StuckPointPlacementController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public replace: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPointPlacement.html';

    public constructor() {
    }
    
    public static create() {
        var directive = () => new StuckPointPlacement();
        directive.$inject = [];
        return directive;
    }
}