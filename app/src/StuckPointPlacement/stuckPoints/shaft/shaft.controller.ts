interface IShaftController {
    /**
    * bind to controller
    */
    shaft: any;
}

export class ShaftController implements IShaftController {
    public static $inject: string[] = [];

    private config: any = {
        width: 3,
        verticalMargin: 20
    };

    /**
     * bind to controller
     */
    public shaft: any;

    public constructor() {
        this.init();
    }

    private init(): void {

    }
}