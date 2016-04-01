import {StuckPointPlacementConfig} from './../../../Jar.Common/Core/StuckPointPlacement.config';

import {Shaft} from './shaft.directive'
import {ShaftController} from './shaft.controller'

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.shaft`, [])
    .directive(`${StuckPointPlacementConfig.directivePrefix}Shaft`, Shaft.create())
    .controller('ShaftController', ShaftController);