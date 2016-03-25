import './app.less';

import {AppController} from './app.controller.ts'

import './StuckPointPlacement/stuckPointPlacement.module'

angular
    .module('myApp', [
        'myApp.stuckPointPlacement'
    ])
    .controller('AppController', AppController);