export class EventEmitter<T> extends Rx.Subject<T> {
    protected _isAsync: boolean;

    public constructor(isAsync: boolean = true) {
        super();
        this._isAsync = isAsync;
    }

    public emit(value: T) {
        super.onNext(value);
    }

    public next(value: any) { super.onNext(value); }

    public subscribe(generatorOrNext?: any, error?: any, complete?: any): any {
        let schedulerFn;
        let errorFn = (err: any) => null;
        let completeFn = () => null;

        if (generatorOrNext && typeof generatorOrNext === 'object') {
            schedulerFn = this._isAsync ? (value) => { setTimeout(() => generatorOrNext.next(value)); } :
                (value) => { generatorOrNext.next(value); };

            if (generatorOrNext.error) {
                errorFn = this._isAsync ? (err) => { setTimeout(() => generatorOrNext.error(err)); } :
                    (err) => { generatorOrNext.error(err); };
            }

            if (generatorOrNext.complete) {
                completeFn = this._isAsync ? () => { setTimeout(() => generatorOrNext.complete()); } :
                    () => { generatorOrNext.complete(); };
            }
        } else {
            schedulerFn = this._isAsync ? (value) => { setTimeout(() => generatorOrNext(value)); } :
                (value) => { generatorOrNext(value); };

            if (error) {
                errorFn =
                    this._isAsync ? (err) => { setTimeout(() => error(err)); } : (err) => { error(err); };
            }

            if (complete) {
                completeFn =
                    this._isAsync ? () => { setTimeout(() => complete()); } : () => { complete(); };
            }
        }

        return super.subscribe(schedulerFn, errorFn, completeFn);
    }
}