export class Shaft {
    public restrict: string = 'AE';

    public scope: any = {
        shaft: '='
    };
    public controller: string = 'ShaftController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPoints/shaft/shaft.html';

    public link: ng.IDirectiveLinkFn;

    private config: any = {
        width: 2,
        verticalMargin: 20
    };

    public constructor() {
        this.link = (scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ctrl: any) => this.linkFn(scope, element, attrs, ctrl);
    }

    private linkFn(scope: ng.IScope, element: JQuery, attrs: ng.IAttributes, ctrl: any) {
        this.init(ctrl);
    }

    private init(ctrl): void {
        ctrl.compression = {
            width: this.config.width,
            height: this.calculateHeight(ctrl),
            x: ctrl.shaft.parentWidth / 2,
            y: this.config.verticalMargin
        }
    }

    private calculateHeight(ctrl) {
        return ctrl.shaft.parentHeight - this.config.verticalMargin * 2;
    }

    public static create() {
        var directive = () => new Shaft();
        directive.$inject = [];
        return directive;
    }
}