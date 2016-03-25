import './StuckPoints/stuckPoints.module';

import {StuckPointPlacementConfig} from './../Core/StuckPointPlacement.config.ts'

import {StuckPointPlacement} from "./stuckPointPlacement.directive";
import {StuckPointPlacementController} from "./stuckPointPlacement.controller";

angular
    .module(`${StuckPointPlacementConfig.moduleName}.stuckPointPlacement`, [
        `${StuckPointPlacementConfig.moduleName}.stuckPointPlacement.stuckPoints`
    ])
    .directive(`${StuckPointPlacementConfig.directivePrefix}StuckPointPlacement`, StuckPointPlacement.create())
    .controller('StuckPointPlacementController', StuckPointPlacementController);