export class Shaft {
    public scope: any = {
        shaft: '<'
    };
    public controller: string = 'ShaftController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPoints/shaft/shaft.html';

    public link: ng.IDirectiveLinkFn;

    public constructor() {
        this.link = (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ctrl: any) => this.linkFn(scope, element, attrs, ctrl);
    }

    private linkFn(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ctrl: any) {
        this.init(ctrl);
    }

    private init(ctrl): void {
        ctrl.compression = {
            width: ctrl.shaft.width,
            height: this.calculateHeight(ctrl),
            x: ctrl.shaft.parentWidth / 2,
            y: ctrl.shaft.verticalMargin
        }
    }

    private calculateHeight(ctrl) {
        return ctrl.shaft.parentHeight - ctrl.shaft.verticalMargin * 2;
    }

    public static create() {
        var directive = () => new Shaft();
        directive.$inject = [];
        return directive;
    }
}