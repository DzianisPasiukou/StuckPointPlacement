export class Legend {
    public scope: any = {
        legend: '<'
    };

    public controller: string = 'LegendController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = 'src/StuckPointPlacement/stuckPoints/legend/legend.html';

    public constructor() {
    }

    public static create() {
        var directive = () => new Legend();
        directive.$inject = [];
        return directive;
    }
}