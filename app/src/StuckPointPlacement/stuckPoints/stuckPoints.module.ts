import './core/core.module';

import './pointInstance/pointInstance.module';
import './shaft/shaft.module';
import './draggable/draggable.module';
import './legend/legend.module';
import './deletion/deletion.module';

import {StuckPointPlacementConfig} from './../../Core/StuckPointPlacement.config'

import {StuckPoints} from "./stuckPoints.directive";
import {StuckPointsController} from "./stuckPoints.controller";

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints`, [
        `${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.core`,
        `${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.pointInstance`,
        `${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints.shaft`,
        `${StuckPointPlacementConfig.moduleName}.stuckPoints.draggable`,
        `${StuckPointPlacementConfig.moduleName}.stuckPoints.legend`,
        `${StuckPointPlacementConfig.moduleName}.stuckPoints.deletion`
    ])
    .directive(`${StuckPointPlacementConfig.directivePrefix}StuckPoints`, StuckPoints.create())
    .controller('StuckPointsController', StuckPointsController);