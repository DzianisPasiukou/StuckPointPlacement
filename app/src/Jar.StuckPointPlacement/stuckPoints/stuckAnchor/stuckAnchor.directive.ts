let template = require('./stuckAnchor.html');

export class StuckAnchor {
    public scope: any = {
        anchor: '<'
    };

    public controller: string = 'StuckAnchorController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = template;

    public constructor() {
    }

    public static create() {
        var directive = () => new StuckAnchor();
        directive.$inject = [];
        return directive;
    }
}