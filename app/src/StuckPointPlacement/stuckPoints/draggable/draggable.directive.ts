export class Draggable {
    public scope: any = {
        onDragStart: '&jarDragstart',
        onDrag: '&jarDrag',
        onDragEnd: '&jarDragend'
    };

    public controller: string = 'DraggableController as $ctrl';
    public bindToController: boolean = true;

    public templateNamespace: string = 'svg';

    public link: ng.IDirectiveLinkFn;

    public constructor() {
        this.link = (scope: any, element: JQuery, attrs: ng.IAttributes, ctrl: any) =>
            this.linkFn(scope, element, attrs, ctrl);
    }

    private linkFn(scope: any, element: JQuery, attrs: ng.IAttributes, ctrl: any) {
        ctrl.initDrag(element[0]);
    }

    public static create() {
        var directive = () => new Draggable();
        directive.$inject = [];
        return directive;
    }
}