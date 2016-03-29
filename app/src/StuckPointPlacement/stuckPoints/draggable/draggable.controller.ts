export class DraggableController {
    public static $inject: string[] = [];

    public constructor() { }

    /**
     * @output onDragStart
     */
    public onDragStart($event: any): void { }

    /**
     * @output onDrag
     */
    public onDrag($event: any): void { }

    /**
    * @output onDragEnd
    */
    public onDragEnd($event: any): void { }

    public initDrag(element) {
        let that = this;

        d3.select('svg')
            .call(d3.behavior.drag()
                .on('dragstart', function() {
                    that.onDragStart({
                        $event: d3.mouse(this)
                    });
                })
                .on('drag', function() {
                    that.onDrag({
                        $event: d3.mouse(this)
                    });
                })
                .on('dragend', function() {
                    that.onDragEnd({
                        $event: d3.mouse(this)
                    });
                })
            );
    }
}