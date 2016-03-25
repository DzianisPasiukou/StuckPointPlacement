export class PointInstance {
    public restrict: string = 'AE';

    public scope: any = {
        point: '=',
        onPointChanged: '&'
    };
    public controller: string = 'PointInstanceController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPoints/pointInstance/pointInstance.html';

    public constructor() { }

    public link(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes) {
    }

    public static create() {
        var directive = () => new PointInstance();
        directive.$inject = [];
        return directive;
    }
}