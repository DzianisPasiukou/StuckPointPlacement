export class StuckPointPlacement implements ng.IDirective {
    public restrict:string = 'AE';

    public scope:any = {};
    public controller:string = 'StuckPointPlacementController';
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;

    public templateUrl:string = 'src/StuckPointPlacement/resources/templates/stuckPointPlacement.html';

    public constructor() {
    }

    public link(scope:ng.IScope, element:JQuery, attrs:ng.IAttributes) {

    }

    public static create() {
        var directive = () => new StuckPointPlacement();
        directive.$inject = [];
        return directive;
    }
}