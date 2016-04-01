export interface IStuckStatesService {
    getConfig(parent);
    searchState(stateIndex);
    getStateConfig(state)

}

export class StuckStatesService {
    public static $inject: string[] = ['POINT_STATES'];

    private _stateAssociations: string[];
    private _states: any;

    public constructor(POINT_STATES) {
        this._stateAssociations = [
            POINT_STATES.invalid,
            POINT_STATES.error,
            POINT_STATES.warning,
            POINT_STATES.success,
            POINT_STATES.noData
        ];

        this._states = {};
        this._states[POINT_STATES.invalid] = {
            color: 'rgb(255,255,255)',
            border: 'rgb(170,170,170)',
            borderWidth: '3',
            icon: 'assets/img/point-section-zero-active.png'
        };
        this._states[POINT_STATES.error] = {
            color: 'rgb(230,16,16)',
            border: '',
            borderWidth: '',
            icon: 'assets/img/point-section-red-active.png'
        };
        this._states[POINT_STATES.warning] = {
            color: 'rgb(255,184,71)',
            border: '',
            borderWidth: '',
            icon: 'assets/img/point-section-yellow-active.png'
        };
        this._states[POINT_STATES.success] = {
            color: 'rgb(141,192,86)',
            border: '',
            borderWidth: '',
            icon: 'assets/img/point-section-green-active.png'
        };
        this._states[POINT_STATES.noData] = {
            color: 'rgb(170,170,170)',
            border: '',
            borderWidth: '',
            icon: 'assets/img/point-section-grey-active.png'
        };
    }

    public getConfig(parent) {
        let config = {
            bar: {
                width: 3,
                verticalMargin: 20,
                getHeight: function() {
                    return parent.height - this.verticalMargin * 2;
                }
            },

            point: {
                radius: 6.25,
                getStateConfig: (state) => {
                    return this.getStateConfig(state);
                }
            }
        };

        return config;
    }

    public searchState(stateIndex) {
        return this._stateAssociations[stateIndex];
    }

    public getStateConfig(state) {
        if (angular.isNumber(state)) {
            return this._states[this.searchState(state)];
        } else {
            return this._states[state];
        }
    }
}