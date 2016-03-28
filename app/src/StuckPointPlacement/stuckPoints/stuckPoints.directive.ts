export class StuckPoints {
    public scope: any = {
        stuckEntity: '=',
        onStuckEntityChanged: '='
    };

    public controller: string = 'StuckPointsController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPoints/stuckPoints.html';

    public link: ng.IDirectiveLinkFn;

    public constructor() {
        this.link = (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ctrl: any) => this.linkFn(scope, element, attrs, ctrl);
    }

    private linkFn(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ctrl: any) {
        this.init(ctrl);
    }

    private init(ctrl): void {
    }

    public static create() {
        var directive = () => new StuckPoints();
        directive.$inject = [];
        return directive;
    }
}