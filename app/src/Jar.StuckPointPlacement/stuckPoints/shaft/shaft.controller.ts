interface IShaftController {
    /**
     * bind to controller
     */
    shaft: any;
    compression: any;
}

export class ShaftController implements IShaftController {
    public static $inject:string[] = [];

    /**
     * bind to controller
     */
    public shaft:any;

    public compression:any;

    public constructor() {
    }
}