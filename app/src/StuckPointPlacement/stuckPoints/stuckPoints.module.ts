import './pointInstance/pointInstance.module';
import './shaft/shaft.module';

import {StuckPointPlacementConfig} from './../../Core/StuckPointPlacement.config'

import {StuckPoints} from "./stuckPoints.directive";
import {StuckPointsController} from "./stuckPoints.controller";

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints`, [
        `${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.pointInstance`,
        `${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.shaft`
    ])
    .directive(`${StuckPointPlacementConfig.directivePrefix}StuckPoints`, StuckPoints.create())
    .controller('StuckPointsController', StuckPointsController);