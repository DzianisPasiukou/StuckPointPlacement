export class DraggableController {
    public static $inject: string[] = ['$timeout'];

    public constructor(private $timeout: ng.ITimeoutService) { }

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

    /**
   * @output onDragEnd
   */
    public onMouseMove($event: any): void { }

    public initDrag(element) {
        let that = this;

        d3.select(element)
            .on('mousemove', function() {
                let $event = d3.mouse(this);

                that.$timeout(() => {
                    that.onMouseMove ? that.onMouseMove({
                        $event: $event
                    }) : function() { } ();
                });
            })
            .call(d3.behavior.drag()
                .on('dragstart', function() {
                    let $event = d3.mouse(this);

                    that.$timeout(() => {
                        that.onDragStart ? that.onDragStart({
                            $event: $event
                        }) : function() { } ();
                    });
                })
                .on('drag', function() {
                    let $event = d3.mouse(this);

                    that.$timeout(() => {
                        that.onDrag ? that.onDrag({
                            $event: $event
                        }) : function() { } ();
                    });
                })
                .on('dragend', function() {
                    let $event = d3.mouse(this);

                    that.$timeout(() => {
                        that.onDragEnd ? that.onDragEnd({
                            $event: $event
                        }) : function() { } ();
                    });
                })
            );
    }
}