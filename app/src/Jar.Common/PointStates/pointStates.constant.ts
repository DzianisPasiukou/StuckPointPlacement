export class PointStatesConstant {
    public constructor() { }

    static create() {
        return {
            invalid: 'Invalid',
            warning: 'Warning',
            success: 'Success',
            error: 'Error',
            noData: 'No data'
        }
    }
}