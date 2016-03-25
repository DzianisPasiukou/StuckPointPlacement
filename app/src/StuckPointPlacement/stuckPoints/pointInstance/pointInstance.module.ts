import {StuckPointPlacementConfig} from './../../../Core/StuckPointPlacement.config';

import {PointInstance} from './pointInstance.directive'
import {PointInstanceController} from './pointInstance.controller'

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.pointInstance`, [])
    .directive(`${StuckPointPlacementConfig.directivePrefix}PointInstance`, PointInstance.create())
    .controller('PointInstanceController', PointInstanceController);