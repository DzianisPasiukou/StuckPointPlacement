import {IAnchorEntity} from './../core/entities/interfaces/IAnchorEntity';

export class StuckAnchorController {
    public static $inject: string[] = [];

    /**
    * @input anchor - the any passed to us
    */
    public anchor: IAnchorEntity;

    public constructor() {
        this.anchor.subscribe((anchor: IAnchorEntity) => this.onAnchorChangedCallback(anchor));
    }

    private onAnchorChangedCallback(anchor: IAnchorEntity) {
        let bbox = (d3.select('.stuck-anchor').select('text')[0][0] as any).getBBox();

        this.anchor.updateComponents({
            width: bbox.width,
            height: bbox.height
        });
    }
}