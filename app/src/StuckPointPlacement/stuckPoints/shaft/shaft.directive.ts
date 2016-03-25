export class Shaft {
    public restrict: string = 'AE';

    public scope: any = {
        shaft: '='
    };
    public controller: string = 'ShaftController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPoints/shaft/shaft.html';

    public constructor() { }

    public link(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes) {
    }

    public static create() {
        var directive = () => new Shaft();
        directive.$inject = [];
        return directive;
    }
}