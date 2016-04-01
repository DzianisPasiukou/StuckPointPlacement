import './core/core.module';

import './pointInstance/pointInstance.module';
import './shaft/shaft.module';
import './draggable/draggable.module';
import './legend/legend.module';
import './deletion/deletion.module';
import './stuckAnchor/stuckAnchor.module';

import {StuckPointPlacementConfig} from './../../Jar.Common/Core/StuckPointPlacement.config'

import {StuckPoints} from "./stuckPoints.directive";
import {StuckPointsController} from "./stuckPoints.controller";

angular
    .module(`${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints`, [
        `${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.core`,
        `${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.pointInstance`,
        `${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.shaft`,
        `${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.draggable`,
        `${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.legend`,
        `${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.deletion`,
        `${StuckPointPlacementConfig.moduleName}.StuckPointPlacement.stuckPoints.stuckAnchor`
    ])
    .directive(`${StuckPointPlacementConfig.directivePrefix}StuckPoints`, StuckPoints.create())
    .controller('StuckPointsController', StuckPointsController);