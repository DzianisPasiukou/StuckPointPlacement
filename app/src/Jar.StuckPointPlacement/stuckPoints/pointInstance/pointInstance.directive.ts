let template = require('./pointInstance.html');

export class PointInstance {
    public scope: any = {
        point: '<',
        onPointChanged: '<'
    };
    public controller: string = 'PointInstanceController';
    public controllerAs: string = '$ctrl';
    public bindToController: boolean = true;

    public templateUrl: string = template;
    public templateNamespace: string = 'svg';

    public constructor() {
    }

    public static create() {
        var directive = () => new PointInstance();
        directive.$inject = [];
        return directive;
    }
}