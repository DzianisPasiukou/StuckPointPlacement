import {StuckPointPlacementConfig} from './../../../Jar.Common/Core/StuckPointPlacement.config';

import {PointInstance} from './pointInstance.directive'
import {PointInstanceController} from './pointInstance.controller'

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.pointInstance`, [])
    .directive(`${StuckPointPlacementConfig.directivePrefix}PointInstance`, PointInstance.create())
    .controller('PointInstanceController', PointInstanceController);