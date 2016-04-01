import './app.less';

import {AppController} from './app.controller.ts'

import './Jar.Common/PointStates/pointStates.module';
import './Jar.StuckPointPlacement/stuckPointPlacement.module'

angular
    .module('Jar', [
        'Jar.StuckPointPlacement'
    ])
    .controller('AppController', AppController);